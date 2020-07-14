(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{598:function(t,a,s){"use strict";s.r(a);var e=s(69),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pagedriver-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagedriver-对象"}},[t._v("#")]),t._v(" PageDriver 对象")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("PageDriverAsync 和 PageDriverSync 中的 API 基本保持一致")]),t._v(" "),s("li",[t._v("只是 PageDriverSync 中的成员函数返回的是 PageDriver 本身，PageDriverAsync 中的成员函数一般返回 void")])])]),t._v(" "),s("h2",{attrs:{id:"_1-接口定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-接口定义"}},[t._v("#")]),t._v(" 1. 接口定义")]),t._v(" "),s("p",[s("code",[t._v("PageDriver")]),t._v(" 中需要实现的接口如下：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageDriver")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 走指定的代理服务，由代理服务配置请求加载本地项目，从而达到同源测试的目的\n   * 若不配置，则之前请求现网，亦可直接测试现网的服务\n   *\n   * https://github.com/segmentio/nightmare#switches\n   *\n   * @param {String} proxyServer 代理服务器，格式为 my_proxy_server.example.com:8080，例如 127.0.0.1:8899\n   * @return {PageDriver}\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useProxyServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxyServer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageDriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 使用 mockstar 工具来做接口 mock 数据\n   *\n   * https://github.com/mockstarjs/mockstar\n   *\n   * @return {PageDriver}\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMockstar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queryMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MockstarQueryDataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageDriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 注入 cookie\n   *\n   * https://github.com/helinjiang/nightmare-handler/blob/master/docs/exCookies.md\n   * https://github.com/helinjiang/nightmare-handler/tree/master/demo/extend-exCookies\n   *\n   * @param {String | Object } cookieConfig 支持 `mykey1=myvalue1; mykey2=myvalue2` 和 `{mykey1:'myvalue1', mykey2:'myvalue'}` 写法\n   * @return {PageDriver}\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCookieConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookieConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CookieConfigOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageDriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 设置无头浏览器设备参数\n   *\n   * https://github.com/helinjiang/nightmare-handler/blob/master/docs/exDevice.md\n   *\n   * @param {String | Object} deviceConfig 设备名或者设备配置，默认值为 mobile\n   * @param {String} [deviceConfig.name] 设备名字\n   * @param {String} [deviceConfig.UA] userAgent\n   * @param {Number} [deviceConfig.width] 视窗宽度\n   * @param {Number} [deviceConfig.height] 视窗高度，注意这里不是指页面的高度，页面高度要小于这个值\n   * @return {PageDriver}\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDeviceConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deviceConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" DeviceConfigOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageDriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 设置截屏参数，默认不截图\n   *\n   * @param {Boolean | String | Object} screenshotConfig\n   * @return {PageDriver}\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setScreenshotConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screenshotConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ScreenOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageDriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 设置覆盖率参数\n   *\n   * @param {Boolean | String | Object} coverageConfig\n   * @return {PageDriver}\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCoverageConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coverageConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CoverageOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageDriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 设置 MatmanResult 执行结果参数\n   *\n   * @param {Boolean | String | Object} matmanResultConfig\n   * @return {PageDriver}\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMatmanResultConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matmanResultConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ResultOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageDriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 加载指定的页面地址\n   *\n   * @param pageUrl\n   * @return {PageDriver}\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPageUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageDriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 增加测试动作\n   *\n   * @param {String} actionName 动作名称，后续可通过它来获得最后的数据\n   * @param {Function} actionCall 执行函数，接受一个 nightmare 对象，可以直接操作\n   * @return {PageDriver}\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    actionName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("actionCall")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Nightmare "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" puppeteer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Nightmare "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageDriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 执行爬虫脚本或者方法获得结果\n   *\n   * https://www.npmjs.com/package/nightmare#evaluatefn-arg1-arg2\n   *\n   * @param {String | Function} fn\n   * @param [args]\n   * @return {Promise<MatmanResult|PageDriver>}\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("evaluate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MatmanResult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" PageDriver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("evaluate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MatmanResult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" PageDriver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_2-pagedriverasync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-pagedriverasync"}},[t._v("#")]),t._v(" 2. PageDriverAsync")]),t._v(" "),s("h3",{attrs:{id:"_2-1-useproxyserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-useproxyserver"}},[t._v("#")]),t._v(" 2.1 useProxyServer")]),t._v(" "),s("blockquote",[s("p",[t._v("设置代理服务")])]),t._v(" "),s("h4",{attrs:{id:"_2-1-1-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-参数"}},[t._v("#")]),t._v(" 2.1.1 参数")]),t._v(" "),s("ul",[s("li",[t._v("proxyServer：代理服务地址（String）")])]),t._v(" "),s("h4",{attrs:{id:"_2-1-2-返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-返回值"}},[t._v("#")]),t._v(" 2.1.2 返回值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("void")])])]),t._v(" "),s("h3",{attrs:{id:"_2-2-usemockstar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-usemockstar"}},[t._v("#")]),t._v(" 2.2 useMockstar")]),t._v(" "),s("blockquote",[s("p",[t._v("设置 mock 服务")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-参数"}},[t._v("#")]),t._v(" 2.2.1 参数")]),t._v(" "),s("ul",[s("li",[t._v("queryMap：mockstar 数据映射（MockstarQueryDataMap），类型定义如下：")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MockstarQueryDataMap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-2-2-返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-返回值"}},[t._v("#")]),t._v(" 2.2.2 返回值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("void")])])]),t._v(" "),s("h3",{attrs:{id:"_2-3-setcookieconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-setcookieconfig"}},[t._v("#")]),t._v(" 2.3 setCookieConfig")]),t._v(" "),s("blockquote",[s("p",[t._v("设置 cookie")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-参数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-参数-2"}},[t._v("#")]),t._v(" 2.2.1 参数")]),t._v(" "),s("ul",[s("li",[t._v("cookieConfig：需要注入的 cookie（CookieConfigOpts，可以传入 "),s("code",[t._v("符合格式的 cookie 字符串、键值映射、对象数组")]),t._v("），类型定义如下：")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CookieMap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/puppeteer/puppeteer/blob/v4.0.0/docs/api.md#pagesetcookiecookies")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CookieObject")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  domain"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  expires"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  httpOnly"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  secure"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mykey1=myvalue1; mykey2=myvalue2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" cookieStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" CookieConfigOpts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cookieStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CookieMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CookieObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-2-2-返回值-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-返回值-2"}},[t._v("#")]),t._v(" 2.2.2 返回值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("void")])])]),t._v(" "),s("h3",{attrs:{id:"_2-4-setdeviceconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-setdeviceconfig"}},[t._v("#")]),t._v(" 2.4 setDeviceConfig")]),t._v(" "),s("blockquote",[s("p",[t._v("设置设备参数")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-参数-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-参数-3"}},[t._v("#")]),t._v(" 2.2.1 参数")]),t._v(" "),s("ul",[s("li",[t._v("deviceConfig：设备参数设置（DeviceConfigOpts，当传入 "),s("code",[t._v("string")]),t._v(" 时，应为你需要指定的设备，否则传入"),s("code",[t._v("object")]),t._v("），类型定义如下：")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Viewport")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面宽度")]),t._v("\n  width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面高度")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设备缩放比例，默认为 1")]),t._v("\n  deviceScaleFactor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否是移动设备")]),t._v("\n  isMobile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否支持触摸事件")]),t._v("\n  hasTouch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否以 landscape 模式运行，默认为 false")]),t._v("\n  isLandscape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设备名称")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// UA 设置")]),t._v("\n  userAgent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  viewport"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基于哪一个设备扩展")]),t._v("\n  extend"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" DeviceConfigOpts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-2-2-返回值-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-返回值-3"}},[t._v("#")]),t._v(" 2.2.2 返回值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("void")])])]),t._v(" "),s("h3",{attrs:{id:"_2-5-setscreenshotconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-setscreenshotconfig"}},[t._v("#")]),t._v(" 2.5 setScreenshotConfig")]),t._v(" "),s("blockquote",[s("p",[t._v("设置截屏配置")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-参数-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-参数-4"}},[t._v("#")]),t._v(" 2.2.1 参数")]),t._v(" "),s("ul",[s("li",[t._v("screenshotConfig：截屏配置（ScreenOpts，传入 "),s("code",[t._v("string")]),t._v(" 时为文件保存路径，"),s("code",[t._v("boolean")]),t._v(" 时为是否启动截屏，"),s("code",[t._v("object")]),t._v(" 时为截屏区域设置等），类型定义如下：")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 截图区域的配置信息\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClipOpts")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 区域左上角坐标")]),t._v("\n  x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 截图区域宽高")]),t._v("\n  width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 是否启用截图, 或者截图保存的文件名路径(如果想对路径, 则相对于basePath 而言), 或者截图配置\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ScreenOpts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" clip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ClipOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-2-2-返回值-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-返回值-4"}},[t._v("#")]),t._v(" 2.2.2 返回值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("void")])])]),t._v(" "),s("h3",{attrs:{id:"_2-6-setcoverageconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-setcoverageconfig"}},[t._v("#")]),t._v(" 2.6 setCoverageConfig")]),t._v(" "),s("blockquote",[s("p",[t._v("设置覆盖率配置")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-参数-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-参数-5"}},[t._v("#")]),t._v(" 2.2.1 参数")]),t._v(" "),s("ul",[s("li",[t._v("coverageConfig：覆盖率配置参数（CoverageOpts），类型定义如下：")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 覆盖率选项\n * 是否启用覆盖率, 或者覆盖率保存的文件名路径 (如果想对路径, 则相对于basePath 而言), 或者覆盖率配置\n *\n * @member opts.path 保存覆盖率文件的路径, 如果没有填写就自动生成\n * @member opts.tag 标记\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" CoverageOpts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-2-2-返回值-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-返回值-5"}},[t._v("#")]),t._v(" 2.2.2 返回值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("void")])])]),t._v(" "),s("h3",{attrs:{id:"_2-7-setmatmanresultconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-setmatmanresultconfig"}},[t._v("#")]),t._v(" 2.7 setMatmanResultConfig")]),t._v(" "),s("blockquote",[s("p",[t._v("设置运行结果保存配置")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-参数-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-参数-6"}},[t._v("#")]),t._v(" 2.2.1 参数")]),t._v(" "),s("ul",[s("li",[t._v("matmanResultConfig：执行结果保存配置（ResultOpts），类型定义如下：")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 执行结果选项\n * 是否启用执行结果，或者执行结果保存的文件名路径(如果想对路径，则相对于basePath 而言)，或者执行结果配置\n *\n * @member opts.path 执行结果保存的完成文件名，如果不填写，则将根据当前路径自动生成名字\n * @member opts.tag 标记\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ResultOpts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-2-2-返回值-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-返回值-6"}},[t._v("#")]),t._v(" 2.2.2 返回值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("void")])])]),t._v(" "),s("h3",{attrs:{id:"_2-8-setpageurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-setpageurl"}},[t._v("#")]),t._v(" 2.8 setPageUrl")]),t._v(" "),s("blockquote",[s("p",[t._v("设置页面 URL")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-参数-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-参数-7"}},[t._v("#")]),t._v(" 2.2.1 参数")]),t._v(" "),s("ul",[s("li",[t._v("pageUrl：待测试页面的 URL（string）")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-2-返回值-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-返回值-7"}},[t._v("#")]),t._v(" 2.2.2 返回值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("void")])])]),t._v(" "),s("h3",{attrs:{id:"_2-9-addaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-addaction"}},[t._v("#")]),t._v(" 2.9 addAction")]),t._v(" "),s("blockquote",[s("p",[t._v("设置页面操作步骤")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-参数-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-参数-8"}},[t._v("#")]),t._v(" 2.2.1 参数")]),t._v(" "),s("ul",[s("li",[t._v("actionName：action 的名称（string）")]),t._v(" "),s("li",[t._v("actionCall：需要执行的方法（"),s("code",[t._v("(n: Nightmare & puppeteer.Page) => Nightmare | Promise<void>")]),t._v("）")]),t._v(" "),s("li",[t._v("需要注意的是\n"),s("ul",[s("li",[t._v("当 runner 选择 puppeteer 时，需要传入的函数为异步函数")]),t._v(" "),s("li",[t._v("当 runner 选择 Nightmare 时，需要将 Nightmare 实例返回")])])])]),t._v(" "),s("h4",{attrs:{id:"_2-2-2-返回值-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-返回值-8"}},[t._v("#")]),t._v(" 2.2.2 返回值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("void")])])]),t._v(" "),s("h3",{attrs:{id:"_2-10-evaluate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-evaluate"}},[t._v("#")]),t._v(" 2.10 evaluate")]),t._v(" "),s("blockquote",[s("p",[t._v("设置爬虫、得到结果")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-参数-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-参数-9"}},[t._v("#")]),t._v(" 2.2.1 参数")]),t._v(" "),s("ul",[s("li",[t._v("evaluate：需要执行的爬虫脚本的路径或者函数（string 或者 Function）")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-2-返回值-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-返回值-9"}},[t._v("#")]),t._v(" 2.2.2 返回值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise<MatmanResult | PageDriver>")])])]),t._v(" "),s("h2",{attrs:{id:"_3-pagedriversync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-pagedriversync"}},[t._v("#")]),t._v(" 3. PageDriverSync")]),t._v(" "),s("ul",[s("li",[t._v("与 "),s("code",[t._v("PageDriverAsync")]),t._v(" 基本一致")]),t._v(" "),s("li",[s("code",[t._v("evaluate")]),t._v(" 与 "),s("code",[t._v("PageDriverAsync")]),t._v(" 完全一致")]),t._v(" "),s("li",[t._v("除 "),s("code",[t._v("evaluat")]),t._v(" 外，其余函数为同步函数且返回 "),s("code",[t._v("PageDriverSync")]),t._v(" 本身")]),t._v(" "),s("li",[t._v("其余可参考上述部分")])])])}),[],!1,null,null,null);a.default=r.exports}}]);