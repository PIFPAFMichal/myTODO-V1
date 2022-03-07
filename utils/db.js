"use strict";
exports.__esModule = true;
exports.pool = void 0;
var promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'megak_todo2',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    namedPlaceholders: true,
    decimalNumbers: true
});
