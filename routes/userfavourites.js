// routes/userfavourites.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all favourites
router.get('/', (req, res) => {
	pool.query(
		`SELECT uf.*, u.UserUserName, r.RestaurantName, r.RestaurantRestaurantImage
		FROM userfavourites uf
		JOIN users u ON uf.UserUserID = u.UserUserID
		JOIN restaurants r ON uf.RestaurantRestaurantID = r.RestaurantRestaurantID`,
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// GET favourite by ID
router.get('/:id', (req, res) => {
	pool.query(
		`SELECT uf.*, u.UserUserName, r.RestaurantName, r.RestaurantRestaurantImage
		FROM userfavourites uf
		JOIN users u ON uf.UserUserID = u.UserUserID
		JOIN restaurants r ON uf.RestaurantRestaurantID = r.RestaurantRestaurantID
		WHERE uf.UserFavouriteID = ?`,
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// GET favourites by UserID
router.get('/user/:id', (req, res) => {
	pool.query(
		`SELECT uf.*, u.UserUserName, r.RestaurantName ,  r.RestaurantRestaurantImage
		FROM userfavourites uf
		JOIN users u ON uf.UserUserID = u.UserUserID
		JOIN restaurants r ON uf.RestaurantRestaurantID = r.RestaurantRestaurantID
		WHERE uf.UserUserID = ?`,
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// POST create new favourite
router.post('/', (req, res) => {
	const params = req.body;
	pool.query('INSERT INTO userfavourites SET ?', params, (err, rows) => {
		if (!err) {
			res.status(201).json({
				isSuccess: true,
				result: rows,
				message: 'Favourite created successfully',
			});
		} else {
			console.log(err);
			res.status(500).json({
				isSuccess: false,
				message: 'Failed to create favourite',
			});
		}
	});
});

// DELETE favourite by ID
router.delete('/:id', (req, res) => {
	pool.query(
		'DELETE FROM userfavourites WHERE UserFavouriteID = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) {
				res.send(`Deleted favourite with id: ${req.params.id}`);
			} else {
				console.log(err);
				res.status(500).send('Failed to delete favourite');
			}
		}
	);
});

module.exports = router;
