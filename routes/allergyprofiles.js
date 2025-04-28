// routes/allergies.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all allergies
router.get('/', (req, res) => {
	pool.query('SELECT * FROM allergyprofiles', (err, rows) => {
		if (!err) res.send(rows);
		else console.log(err);
	});
});

// GET allergyprofile by UserID
router.get('/user/:id', (req, res) => {
	pool.query(
		'SELECT * FROM allergyprofiles WHERE UserUserID = ?',
		[req.params.id],
		(err, rows) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

// DELETE allergyprofiles by USERID
router.delete('/user/:id', (req, res) => {
	pool.query(
		'DELETE FROM allergyprofiles WHERE UserUserID = ?',
		[req.params.id],
		(err, rows) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					isSuccess: false,
					message: 'Error deleting allergies',
				});
			}
			res.json({
				isSuccess: true,
				message: `Deleted allergies for user: ${req.params.id}`,
				count: rows.affectedRows,
			});
		}
	);
});

// CREATE new allergyProfile
router.post('/', (req, res) => {
	const { UserUserID, allergies, severity } = req.body;

	if (!Array.isArray(allergies) || allergies.length === 0) {
		return res.status(400).send('Please provide a list of allergies.');
	}

	const allergyData = allergies.map((allergyID) => [
		UserUserID,
		allergyID,
		severity || null,
	]);
	console.log(allergyData);
	pool.query(
		'INSERT INTO allergyprofiles (UserUserID, AllergyAllergyID, Severity) VALUES ?',
		[allergyData],
		(err, rows) => {
			if (err) {
				console.log(err);
				return res.status(500).send('Error saving allergy profile.');
			}

			// Return success message
			res.status(201).send({
				message: `Successfully added ${allergies.length} allergies for user with ID: ${UserUserID}`,
			});
		}
	);
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
