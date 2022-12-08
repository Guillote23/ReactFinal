var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_DBUSER,
    password: process.env.MYSQL_BDPASS,
    database: process.env.MYSQL_DBNAME
});
pool.query=util.promisify(pool.query);

module.exports = pool;