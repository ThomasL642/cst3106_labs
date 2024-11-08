const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const router = express.Router();
app.use(express.static('public')); // Serve static files from 'public' directory

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+ "/public/Dice.Html"));
});

app.use('/', router);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});