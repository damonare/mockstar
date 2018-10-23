const path = require('path');
const fse = require('fs-extra');
const spawn = require('cross-spawn');

const utilMockstar = require('../utils/mockstar');

module.exports = (configOpts) => {
    // console.log('run-by-pm2', configOpts);

    // pm2 的方式下，则需要先生成 pm2.json 文件，然后再使用 pm2 启动
    const buildPath = utilMockstar.getBuildPath(configOpts.rootPath, configOpts.buildPath);
    const pm2ConfigFilePath = path.join(buildPath, 'pm2.json');

    // 获取配置信息
    let pm2Config = getPm2Config(configOpts);

    // 本地构建一份配置到 buildPath 下
    fse.outputJson(pm2ConfigFilePath, pm2Config)
        .then(() => {
            console.log('Generate pm2.json success!', pm2ConfigFilePath);

            // 注意这里一定要先删除之后再启动，否则可能造成 watch 失效  #119
            deleteTask(() => {
                startTask(pm2ConfigFilePath);
            });
        })
        .catch((err) => {
            throw err;
        });
};

/**
 * 启动 pm2
 * @param {String} pm2ConfigFilePath pm2.json 配置文件绝对路径
 */
function startTask(pm2ConfigFilePath) {
    const runPm2 = spawn('pm2', ['start', pm2ConfigFilePath]);

    // 打印输出
    let output = '';

    // 成功信息
    runPm2.stdout.on('data', (data) => {
        output += data;
    }).pipe(process.stdout);

    // 异常信息
    runPm2.stderr.on('data', (data) => {
        output += data;
    }).pipe(process.stderr);

    // 运行结束
    runPm2.on('close', (code) => {
        // console.log({ code: code, data: output });
    });
}

/**
 * 停止 pm2
 */
function deleteTask(callback) {
    const deletePm2 = spawn('pm2', ['delete', 'mockstar_app']);

    // 打印输出
    let output = '';

    // 成功信息
    deletePm2.stdout.on('data', (data) => {
        output += data;
    }).pipe(process.stdout);

    // 异常信息
    deletePm2.stderr.on('data', (data) => {
        output += data;
    }).pipe(process.stderr);

    // 运行结束
    deletePm2.on('close', (code) => {
        // console.log({ code: code, data: output });

        setTimeout(() => {
            callback();
        }, 200);

    });
}

/**
 * 获得最终的 pm2.json 中内容
 *
 * TODO 这里的配置项应该可以通过 configOpts 传递下来
 *
 * @param configOpts
 * @returns {{apps: *[]}}
 */
function getPm2Config(configOpts) {
    const mockServerPath = utilMockstar.getMockServerPath(configOpts.rootPath, configOpts.mockServerPath);
    const buildPath = utilMockstar.getBuildPath(configOpts.rootPath, configOpts.buildPath);
    const mockstarConfigPath = path.join(configOpts.rootPath, 'mockstar.config.js');

    // http://pm2.keymetrics.io/docs/usage/application-declaration/
    let result = {
        apps: [
            {
                name: 'mockstar_app',
                script: path.join(__dirname, './start-app.js'),
                watch: [mockServerPath],
                ignore_watch: ['node_modules', buildPath],
                args: [mockstarConfigPath, configOpts.rootPath],
                env: {
                    COMMON_VARIABLE: 'true'
                },
                env_production: {
                    NODE_ENV: 'production'
                }
            }
        ]
    };

    return result;
}
