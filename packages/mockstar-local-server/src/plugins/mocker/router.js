const mockstar = require('mockstar');

const baseRouter = require('../../server/router/base-router');

const handleXhr = require('./xhr');
const utilMockstar = require('../../utils/mockstar');

const PLUGIN_NAME = 'mocker';
const HANDLER_NAME_FIELD = 'mockerName';

module.exports = (router, entry) => {
    // 创建 Parser 对象
    const mockerParser = new mockstar.Parser({
        basePath: utilMockstar.getMockServerPath(entry.rootPath, entry.mockServerPath),
        buildPath: utilMockstar.getBuildPath(entry.rootPath, entry.buildPath)
    });

    // 获取所有的 mocker 列表
    let mockerList = mockerParser.getAllMocker();

    // GET /mockstar-cgi/mocker 所有的 mocker 列表信息
    baseRouter.initGetList(router, PLUGIN_NAME, (req, res) => {
        let mockerList = mockerParser.getAllMocker();

        res.jsonp(mockerList);
    });

    // GET /mockstar-cgi/mocker/:mockerName 获得这个 mocker 的信息
    baseRouter.initGetOne(router, PLUGIN_NAME, HANDLER_NAME_FIELD, (req, res) => {
        let result = mockerParser.getMockerByName(req.params[HANDLER_NAME_FIELD]);

        res.jsonp(result);
    });

    // POST /mockstar-cgi/mocker/:mockerName 设置这个 mocker 的信息
    baseRouter.initPostOne(router, PLUGIN_NAME, HANDLER_NAME_FIELD, (req, res) => {
        let result = mockerParser.updateMocker(req.params[HANDLER_NAME_FIELD], req.body);

        res.jsonp(result);
    });

    // GET /mockstar-cgi/mocker/:mockerName/readme 获得这个 mocker 的 readme 信息
    baseRouter.initGetOneReadMe(router, PLUGIN_NAME, HANDLER_NAME_FIELD, (req, res) => {
        res.jsonp({
            html: mockerParser.getReadMeContent(req.params[HANDLER_NAME_FIELD])
        });
    });

    // 处理 plugin=xhr 的场景
    handleXhr(router, mockerList, mockerParser);

    // 携带变量出去
    router._mockerParser = mockerParser;
    router._mockerParser = mockerParser;
};
