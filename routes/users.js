// routes/users.js
const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');

// GET all Users
router.get('/', (req, res) => {
	pool.query('SELECT * FROM users', (err, rows) => {
		if (!err) res.send(rows);
		else console.log(err);
	});
});

// GET User by ID
router.get('/:id', (req, res) => {
	pool.query(
		'SELECT * FROM users WHERE UserUserID = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(rows);
			else {
				res.status(500).send('Error getting user');
			}
		}
	);
});

// GET User by username
router.get('/username/:username', (req, res) => {
	pool.query(
		'SELECT * FROM users WHERE UserUserName = ?',
		[req.params.username],
		(err, rows) => {
			if (!err) res.send(rows);
			else {
				res.status(500).send('Error getting user');
			}
		}
	);
});

// DELETE User by ID
router.delete('/:id', (req, res) => {
	pool.query(
		'DELETE FROM users WHERE UserUserID = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(`Deleted User with id: ${req.params.id}`);
			else console.log(err);
		}
	);
});

// CREATE new User
router.post('/', async (req, res) => {
	const params = req.body;

	if (
		!params.UserFirstName ||
		!params.UserLastName ||
		!params.UserEmail ||
		!params.UserUserName ||
		!params.UserPassword
	) {
		return res.status(400).send({ message: 'Missing required fields' });
	}

	try {
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(params.UserPassword, saltRounds);

		const userWithHashedPassword = {
			...params,
			UserPassword: hashedPassword,
		};

		pool.query(
			'INSERT INTO users SET ?',
			userWithHashedPassword,
			(err, rows) => {
				if (!err) {
					res
						.status(201)
						.send({ message: `Added User with name ${params.UserFirstName}` });
				} else {
					console.error(err);
					res.status(500).send({ message: 'Error adding user' });
				}
			}
		);
	} catch (err) {
		console.error(err);
		res.status(500).send({ message: 'Error hashing password' });
	}
});

router.put('/:id', (req, res) => {
	const params = req.body;
	pool.query(
		`UPDATE users SET UserFirstName = ?, UserLastName = ?, UserEmail = ?, UserProfileImage = ?, UserUserBio = ? WHERE UserUserID = ? `,
		[
			params.UserFirstName,
			params.UserLastName,
			params.UserEmail,
			params.UserProfileImage,
			params.UserUserBio,
			req.params.id,
		],
		(err, results) => {
			if (!err) {
				res
					.status(201)
					.send({ message: `Updated user with ID: ${req.params.id}` });
			} else {
				console.log(err);
				res.status(500).send({ message: 'Error updating User' });
			}
		}
	);
});
//Update USER name
router.put('/:id/name', (req, res) => {
	const params = req.body;
	pool.query(
		`UPDATE users SET UserFirstName = ?, UserLastName = ? WHERE UserUserID = ?`,
		[params.UserFirstName, params.UserLastName, req.params.id],
		(err, results) => {
			if (!err) {
				res
					.status(201)
					.send({ message: `Added User with name ${params.UserFirstName}` });
			} else {
				console.log(err);
				res.status(500).send({ message: 'Error adding user' });
			}
		}
	);
});
//Update USER email
router.put('/:id/email', (req, res) => {
	const params = req.body;
	pool.query(
		`UPDATE users SET
			UserEmail = ?
		WHERE UserUserID = ?`,
		[params.UserEmail, req.params.id],
		(err, results) => {
			if (!err) {
				res.send(`Updated user ${req.params.id}`);
			} else {
				console.log(err);
				res.status(500).send('Error updating user');
			}
		}
	);
});

//Update USER profileImage
router.put('/:id/profileImage', (req, res) => {
	const params = req.body;
	pool.query(
		`UPDATE users SET
			UserProfileImage = ?
		WHERE UserUserID = ?`,
		[params.UserProfileImage, req.params.id],
		(err, results) => {
			if (!err) {
				res.send(`Updated user ${req.params.id}`);
			} else {
				console.log(err);
				res.status(500).send('Error updating user');
			}
		}
	);
});

//Update USER location
router.put('/:id/location', (req, res) => {
	const params = req.body;
	pool.query(
		`UPDATE users SET
			UserLat = ?,
			UserLong = ?
		WHERE UserUserID = ?`,
		[params.UserLat, params.UserLong, req.params.id],
		(err, results) => {
			if (!err) {
				res.send(`Updated user ${req.params.id}`);
			} else {
				console.log(err);
				res.status(500).send('Error updating user');
			}
		}
	);
});

//Update USER password
router.put('/:id/password', (req, res) => {
	const params = req.body;
	pool.query(
		`UPDATE users SET
			UserPassword = ?
		WHERE UserUserID = ?`,
		[params.UserPassword, req.params.id],
		(err, results) => {
			if (!err) {
				res.send(`Updated user ${req.params.id}`);
			} else {
				console.log(err);
				res.status(500).send('Error updating user');
			}
		}
	);
});

//LOGIN USER
router.post('/login', (req, res) => {
	const params = req.body;

	pool.query(
		'SELECT * FROM users WHERE UserUserName = ?',
		[params.UserUserName],
		async (err, rows) => {
			if (err) {
				console.error(err);
				return res.status(500).send('Error during login');
			}

			if (rows.length === 0) {
				return res.status(404).send('User not found');
			}

			const user = rows[0];

			const isMatch = await bcrypt.compare(
				params.UserPassword,
				user.UserPassword
			);

			if (!isMatch) {
				return res.status(401).send('Invalid password');
			}

			delete user.UserPassword;

			res.send(user);
		}
	);
});
module.exports = router;
