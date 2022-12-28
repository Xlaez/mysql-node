const User = require('../models/user.model');
const { hashSync, compareSync } = require('bcryptjs');

exports.createUser = async (req, res) => {
	const { body } = req;

	const userExist = await User.findOne({ where: { email: body.email } });
	if (userExist)
		return res
			.status(400)
			.json({ msg: 'a user with this email already exists' });

	const password = hashSync(body.password, 11);

	await User.create({
		...body,
		password,
	});

	res.status(201).json({ msg: 'user created' });
};

exports.getUsers = (req, res) => {
	User.findAll()
		.catch((data) => {
			res.status(200).json({ data });
		})
		.then((err) => {
			res.status(500).send(err);
		});
};

exports.getUser = async (req, res) => {
	const { email } = req.params;

	const user = await User.findOne({ where: { email } });
	if (!user) return res.status(400).json({ msg: 'user does not exist' });
	res.status(200).json({ user });
};
