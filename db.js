const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
	process.env.MYSQL_DB || 'test',
	process.env.MYSQL_USER || 'root',
	process.env.MYSQL_PASSWORD || 'password',
	{
		dialect: 'mysql',
		host: 'localhost',
	}
);

module.exports = sequelize;

// const pool = mysql.createPool({
// 	host: 'localhost',
// 	user: process.env.MYSQL_USER || 'root',
// 	password: process.env.MYSQL_PASSWORD || 'password',
// 	database: process.env.MYSQL_DB || 'test',
// });

// module.exports = pool.promise();
