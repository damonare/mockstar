'use strict';

const path = require('path');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');
const shell = require('shelljs');
const fse = require('fs-extra');

const utils = require('../utils');

const MockConfig = require('./MockerConfig');

const logger = utils.createLogger({});

module.exports = class extends Generator {

    constructor(...args) {
        super(...args);

        this.answers = {};

        this.mockConfig = new MockConfig();
    }

    /**
     * Show template basic message.
     */
    initializing() {
        this.log(
            chalk.magenta(
                `\n欢迎使用 MockStar 脚手架来创建 mocker！\n`
            )
        );
    }

    /**
     * Interact with developer.
     */
    prompting() {
        let isDev = this.options.isDev;
        let cwd = this.options.env.cwd;

        return this.prompt([{
            type: 'list',
            name: 'mockerParentPath',
            message: '请选择 mocker 放置的根目录',
            choices: function () {
                // 获取可选择的路径
                return utils.getMockServerPathList(cwd) || [];
            },
            validate: function (mockerParentPath) {
                if (!mockerParentPath) {
                    return 'mocker 放置的根目录不能为空';
                }

                return true;
            }
        }, {
            type: 'input',
            name: 'reqURL',
            message: '请输入CGI请求，例如： http://domain.com/a/b/c',
            validate: function (reqURL) {
                if (!reqURL) {
                    return '请输入CGI请求';
                }

                return true;
            }
        }, {
            type: 'list',
            name: 'method',
            message: '请求类型',
            choices: ['get', 'post'],
            default: 'get'
        }, {
            type: 'input',
            name: 'mockerName',
            message: '请输入mocker名称，只能够输入英文、数字和、- 及 _ ',
            default: function (answers) {
                return utils.getMockerNameFromURL(answers.reqURL);
            },
            validate: function (mockerName, answers) {
                if (!mockerName) {
                    return 'mocker名称不能为空';
                }

                // 默认情况下是在当前路径下新建以 projectName 为名字的文件夹，然后再进入其中生成代码。
                // 但如果当前路径下已经存在了，则需要进行提示，避免覆盖
                if (!isDev && fse.pathExistsSync(path.join(answers.mockerParentPath, mockerName))) {
                    return `当前目录下已经存在名字为 ${mockerName} 的文件夹了`;
                }

                return true;
            }
        }]).then((answers) => {
            this.answers = answers;
            this.mockConfig.updateByAnswer(this.answers);
        });
    }

    /**
     * Generator project files.
     */
    writing() {
        const { mockerParentPath, mockerName } = this.mockConfig;

        const _copyTemplates = () => {
            const folderPath = path.join(mockerParentPath, mockerName);

            mkdirp(folderPath);
            shell.cd(folderPath);

            this.destinationRoot(this.destinationPath(folderPath));

            this.fs.copyTpl(
                this.templatePath('_config'),
                this.destinationPath('config.json'),
                {
                    mockConfig: this.mockConfig
                }
            );

            this.fs.copyTpl(
                this.templatePath('README.md'),
                this.destinationPath('README.md'),
                {
                    mockConfig: this.mockConfig
                }
            );

            ['base.js', 'index.js', 'mock_modules', 'static'].forEach((curFile) => {
                this.fs.copy(
                    this.templatePath(curFile),
                    this.destinationPath(curFile)
                );
            });

        };

        _copyTemplates();
    }

    install() {
        logger.info('项目初始化完成');
    }

    end() {
        logger.info(`本次初始化过程结束。`);
    }
};
