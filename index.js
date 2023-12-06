'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Set express variable
const app = express();
app.use(cors({ origin: '*' }));

const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

// Support json encoded bodies
app.use(bodyParser.json());
// Support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Import api
const api = require('./api.trafficlight.js');
app.use(api);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    status: 'error'
  });
});
