const path = require('path');
const { initMocker } = require('../lib');

initMocker({
    isDev: false,
    parentPath: path.join(__dirname, '../test/tmp'),
    isInitReadme: true,
    config: {
        description: '我是一句话描述',
        disable: false,
        method: 'get',
        name: 'getName',
        plugin: 'xhr',
        priority: 1,
        route: '/cgi-bin/getName',
        routeExtra: '',
        tags: []
    }
});