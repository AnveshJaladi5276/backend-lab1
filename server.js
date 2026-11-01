const express = require('express');

const app = express();

const PORT = 3000;

// Home Route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Express Server!');
});

// About Route
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Anvesh Jaladi',
        section: 'QE - 1(A)'
    });
});

// Time Route
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// 404 Route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Express Server running at http://localhost:${PORT}`);
});