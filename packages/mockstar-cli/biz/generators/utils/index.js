const base = require('./base');
const createLogger = require('./logger');

module.exports = {
    readFiles: base.readFiles,
    getMockServerPathList: base.getMockServerPathList,
    createLogger: createLogger
};
