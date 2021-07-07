const express = require('express');

const app = express();

const path = require('path');
app.get('/notes', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Create an `/add` route that returns `add.html`
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app
