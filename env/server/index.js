/**
 * 梳理完成，对应无误，可供使用
 * 入口文件
 * 下属：
 * server/main文件 i
 * constant/host文件 已完成 i
 */
const { PORT } = require('../constant/host'); // 完成
const server = require('./main'); // 完成

server.listen(PORT); // 完成
console.log(`Server is now running at http://localhost:${PORT}.`); // 完成