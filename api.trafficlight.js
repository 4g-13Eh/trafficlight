const express = require('express');
const app = express();
const trafficlight = require('./trafficlight.js');

app.get('/api/welcome', (req, res) => {
    res.status(200).json({
        message: "Welcome to Traffic-Light!",
        status: 'success'
    });
});

app.get('/api/trafficlight/red', (req, res) => {
    res.status(200).json({
        message: trafficlight.trafficLight('red'),
        status: 'success'
    });
});

app.get('/api/trafficlight/green', (req, res) => {
    res.status(200).json({
        message: trafficlight.trafficLight('green'),
        status: 'success'
    });
});

app.get('/api/trafficlight/orange', (req, res) => {
    res.status(200).json({
        message: trafficlight.trafficLight('orange'),
        status: 'success'
    });
});

app.get('/api/trafficlight', (req, res) => {
    res.status(200).json({
        message: trafficlight.trafficLight(undefined),
        status: 'error'
    });
});

// Export the app
module.exports = app;
