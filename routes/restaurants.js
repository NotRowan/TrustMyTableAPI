// routes/restaurants.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all restaurants
router.get('/', (req, res) => {
	pool.query('SELECT * FROM restaurants', (err, rows) => {
		if (!err) res.send(rows);
		else console.log(err);
	});
});

// GET restaurant by ID
router.get('/:id', (req, res) => {
	pool.query(
		'SELECT * FROM restaurants WHERE RestaurantRestaurantID = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// DELETE restaurant by ID
router.delete('/:id', (req, res) => {
	pool.query(
		'DELETE FROM restaurants WHERE RestaurantRestaurantID = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(`Deleted restaurant with id: ${req.params.id}`);
			else console.log(err);
		}
	);
});

// CREATE new restaurant
router.post('/', (req, res) => {
	const params = req.body;
	pool.query('INSERT INTO restaurants SET ?', params, (err, rows) => {
		if (!err) res.send(`Added restaurant with name ${params.RestaurantName}`);
		else console.log(err);
	});
});

module.exports = router;
