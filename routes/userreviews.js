// routes/userreviews.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all reviews
router.get('/', (req, res) => {
	pool.query(
		`SELECT ur.*, u.UserUserName, u.UserProfileImage, r.RestaurantName 
	   FROM userreviews ur
	   JOIN users u ON ur.UserUserID = u.UserUserID
	   JOIN restaurants r ON ur.RestaurantRestaurantID = r.RestaurantRestaurantID`,
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// GET review by ID
router.get('/:id', (req, res) => {
	pool.query(
		`SELECT ur.*, u.UserUserName, u.UserProfileImage, r.RestaurantName 
	   FROM userreviews ur
	   JOIN users u ON ur.UserUserID = u.UserUserID
	   JOIN restaurants r ON ur.RestaurantRestaurantID = r.RestaurantRestaurantID
	   WHERE ur.UserReviewID = ?`,
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// GET review by RestaurantID
router.get('/restaurant/:id', (req, res) => {
	pool.query(
		`SELECT ur.*, u.UserUserName, u.UserProfileImage, r.RestaurantName 
	   FROM userreviews ur
	   JOIN users u ON ur.UserUserID = u.UserUserID
	   JOIN restaurants r ON ur.RestaurantRestaurantID = r.RestaurantRestaurantID
	   WHERE ur.RestaurantRestaurantID = ?`,
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// GET review by UserID
router.get('/user/:id', (req, res) => {
	pool.query(
		`SELECT ur.*, u.UserUserName, u.UserProfileImage, r.RestaurantName 
	   FROM userreviews ur
	   JOIN users u ON ur.UserUserID = u.UserUserID
	   JOIN restaurants r ON ur.RestaurantRestaurantID = r.RestaurantRestaurantID
	   WHERE ur.UserUserID = ?`,
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// GET review average by ID
router.get('/restaurant/average/:id', (req, res) => {
	pool.query(
		'SELECT AVG(UserReviewRating) AS averageRating FROM userreviews WHERE RestaurantRestaurantID  = ?',
		[req.params.id],
		(err, rows) => {
			if (err) {
				console.log(err);
				return res.status(500).send('Error fetching average rating');
			}

			const averageRating = rows[0].averageRating || 0;

			res.send({ averageRating });
		}
	);
});

// DELETE review by ID
router.delete('/:id', (req, res) => {
	pool.query(
		'DELETE FROM userreviews WHERE UserReviewID  = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(`Deleted review with id: ${req.params.id}`);
			else console.log(err);
		}
	);
});

router.post('/', (req, res) => {
	const params = req.body;
	pool.query('INSERT INTO userreviews SET ?', params, (err, rows) => {
		if (!err) {
			res.status(201).json({
				isSuccess: true,
				result: rows,
				message: 'Review created successfully',
			});
		} else {
			console.log(err);
			res.status(500).json({
				isSuccess: false,
				message: 'Failed to create review',
			});
		}
	});
});

//Update Review at id
router.put('/:id', (req, res) => {
	const params = req.body;
	pool.query(
		`UPDATE userreviews SET UserReviewRating = ?, UserReviewContent = ? WHERE UserReviewID = ? `,
		[params.UserReviewRating, params.UserReviewContent, req.params.id],
		(err, rows) => {
			if (!err) {
				res.status(201).json({
					isSuccess: true,
					result: rows,
					message: 'Review updated successfully',
				});
			} else {
				console.log(err);
				res.status(500).json({
					isSuccess: false,
					message: 'Failed to update review',
				});
			}
		}
	);
});

module.exports = router;
