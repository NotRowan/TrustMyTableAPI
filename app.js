// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const allergyRoutes = require('./routes/allergies');
const userRoutes = require('./routes/users');
const restaurantRoutes = require('./routes/restaurants');
const userreviewsRoutes = require('./routes/userreviews');
const allergyprofiles = require('./routes/allergyprofiles');
const userfavourites = require('./routes/userfavourites');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the allergy routes
app.use('/allergies', allergyRoutes);
app.use('/users', userRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/userreviews', userreviewsRoutes);
app.use('/allergyprofiles', allergyprofiles);
app.use('/userfavourites', userfavourites);
app.listen(port, () => console.log(`Listening on port ${port}`));
