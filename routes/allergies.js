// routes/allergies.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all allergies
router.get('/', (req, res) => {
	pool.query('SELECT * FROM allergies', (err, rows) => {
		if (!err) res.send(rows);
		else console.log(err);
	});
});

// GET allergy by ID
router.get('/:id', (req, res) => {
	pool.query(
		'SELECT * FROM allergies WHERE AllergyAllergyID = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// DELETE allergy by ID
router.delete('/:id', (req, res) => {
	pool.query(
		'DELETE FROM allergies WHERE AllergyAllergyID = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(`Deleted Allergy with id: ${req.params.id}`);
			else console.log(err);
		}
	);
});

// CREATE new allergy
router.post('/', (req, res) => {
	const params = req.body;
	pool.query('INSERT INTO allergies SET ?', params, (err, rows) => {
		if (!err) res.send(`Added allergy with name ${params.AllergyName}`);
		else console.log(err);
	});
});

// UPDATE allergy name
router.put('/:id', (req, res) => {
	const params = req.body;
	pool.query(
		'UPDATE allergies SET AllergyName = ? WHERE AllergyAllergyID = ?',
		[params.AllergyName, req.params.id],
		(err, rows) => {
			if (!err)
				res.send(
					`Updated allergy ${req.params.id} with name ${params.AllergyName}`
				);
			else console.log(err);
		}
	);
});

module.exports = router;
