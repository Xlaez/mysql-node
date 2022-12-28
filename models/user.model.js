const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	age: Sequelize.INTEGER,
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	avatar: {
		type: Sequelize.STRING,
		allowNull: true,
	},
});

module.exports = User;
