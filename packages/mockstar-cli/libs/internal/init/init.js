const meow = require('meow');

const initMocker = require('./init-mocker')

/**
 *
 * @param {Object} args
 * @param {Array} args._ 参数，例如 mockstar init xxx yyy，则 args._ = [ 'xxx', 'yyy' ]
 * @param {Boolean} [args.dev] 是否为开发者模式，使用方式: mockstar init --dev
 * @param {String} [args.mockstar] mockstar 的版本号，使用方式: mockstar init --mockstar=1.5.0
 */
module.exports = function (args) {
    // node ./bin/mockstar init --mockstar=1.2.3
    // console.log(args);
    // mockstar init xxx yyy --dev --mockstar=1.5.3
    // { _: [ 'xxx', 'yyy' ], dev: true, mockstar: '1.5.3' }

    // 如果没有命令，则提示
    if (!args._.length) {
        return showHelp();
    }

    const command = args._[0];

    switch (command) {
        case 'mocker':
            return initMocker(args);
        default:
            return showHelp();
    }
};

function showHelp() {
    let arr = [];

    arr.push('    Usage: mockstar init <command> [options] ');
    arr.push('    Commands:');
    arr.push('        project    Initialize project.');
    arr.push('        mocker     Initialize mocker.');
    arr.push('    Options:');
    arr.push('        --dev                  Debug for development.');
    arr.push('    Report bugs to https://github.com/mockstarjs/mockstar/issues.');

    // https://www.npmjs.com/package/meow
    return meow({
        description: false,
        help: arr.join('\n')
    }).showHelp(0);
}