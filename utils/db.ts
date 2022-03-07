import {createPool} from "mysql2/promise";
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'megak_todo2',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    namedPlaceholders: true,
    decimalNumbers: true,
})
