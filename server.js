const express = require('express');
const db = require('./db');
const userRoutes = require('./routes/user.routes');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

const server = (port) => {
	app.listen(port);
	console.info(`========node server running on port ${port}============>`);
};

db.sync()
	.then((result) => {
		server(process.env.PORT || 7000);
	})
	.catch((err) => {
		console.error(err);
	});
