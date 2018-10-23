import _ from 'lodash'

export default class MockerConfig {
  /**
   * 构造函数
   *
   * @param {String} handlerName 名字
   * @param {Object} config config.json 中的值
   * @param {String} [config.route] 需要处理的路由，只有匹配到这个路由，才会被处理
   * @param {Object} [config.routeExtra] 额外的路由匹配参数
   * @param {String} [config.name] 名字
   * @param {String} [config.description] 简要描述
   * @param {Boolean} [config.disable] 此mocker是否为禁用状态，一旦设置为 true，则将忽略该mocker，而是去请求现网
   * @param {String} [config.activeModule] 当前激活的 mock module 名字
   * @param {String} [config.defaultModule] 默认初始化时激活的 mock module 名字
   * @param {String} [config.method] http 请求方式，包括 get(默认) 和 post
   * @param {String} [config.plugin] 数据mock类型，包括 xhr(默认) 和 async
   * @param {Number} [config.priority] 管理后台列表中排序的权重，值越大则越排在前面
   * @param {Array} [config.tags] 标签，用于过滤，字符串数组
   * @param {Array} [mockModuleList] mock module 数组
   */
  constructor(handlerName, config = {}, mockModuleList = []) {
    // 名字，注意名字不能够再被修改，即忽略 config.name
    this.name = handlerName;

    // 需要处理的路由，只有匹配到这个路由，才会被处理
    this.route = config.route || '';

    // 额外的路由匹配参数
    this.routeExtra = config.routeExtra || {};

    // #57 可能route中不以 / 开头，此时需要增加之
    if (this.route && this.route.indexOf('/') !== 0) {
      this.route = '/' + this.route;
    }

    // 简要描述
    this.description = config.description || this.name;

    // 此mocker是否为禁用状态，一旦设置为 true，则将忽略该mocker，而是去请求现网
    // 该字段是可以被 CGI 修改的。
    this.disable = config.disable || false;

    // 默认的的 mock module 名字
    this.defaultModule = config.defaultModule || '';

    // 当前激活的 mock module 名字
    // 该字段是可以被 CGI 修改的。因此优先使用配置项中的 activeModule，其次才是 defaultModule
    this.activeModule = config.activeModule || this.defaultModule;


    if (mockModuleList && mockModuleList.length) {
      let firstMockModuleName = mockModuleList[0].name;

      if (!this.activeModule) {
        // activeModule 如果不存在，则默认设置 mock module 列表中的第一个
        this.activeModule = firstMockModuleName;
      } else {
        // activeModule 如果存在，但并没有在新的列表中，有可能是改名或者删除了，则默认设置 mock module 列表中的第一个
        let activeItem = mockModuleList.filter((item) => {
          return item.name === this.activeModule;
        })[0];

        if (!activeItem) {
          this.activeModule = firstMockModuleName;
        }
      }
    }

    // http 请求方式，包括 get(默认) 和 post
    this.method = config.method || 'get';

    // 数据mock类型，包括 xhr(默认) 和 async
    this.plugin = config.plugin || 'xhr';

    // 管理后台列表中排序的权重，值越大则越排在前面
    this.priority = config.priority || 0;

    // 标签，用于过滤，字符串数组
    this.tags = _.union(['全部'], config.tags || []);

    // 最后更新的时间
    // this.lastModified = Date.now();
  }
}