// routes/userreviews.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all AllergyReviews
router.get('/', (req, res) => {
	pool.query('SELECT * FROM allergyreviews', (err, rows) => {
		if (!err) res.send(rows);
		else console.log(err);
	});
});

// GET AllergyReview by ID
router.get('/:id', (req, res) => {
	pool.query(
		'SELECT * FROM allergyreviews WHERE AllergyReviewID  = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// DELETE AllergyReview by ID
router.delete('/:id', (req, res) => {
	pool.query(
		'DELETE FROM allergyreviews WHERE AllergyReviewID  = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(`Deleted review with id: ${req.params.id}`);
			else console.log(err);
		}
	);
});

// CREATE new review
router.post('/', (req, res) => {
	const params = req.body;
	pool.query('INSERT INTO allergyreviews SET ?', params, (err, rows) => {
		if (!err) res.send(`Added review with ID ${params.UserReviewID}`);
		else console.log(err);
	});
});

module.exports = router;
