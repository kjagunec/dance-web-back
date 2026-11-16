require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Express backend za plesnu školu uspješno radi na Vercelu!'
    });
});

app.get('/api/courses', (req, res) => {
    res.json([
        { id: 1, title: 'Salsa Početni', price: 35 },
        { id: 2, title: 'Bachata Sensual', price: 40 }
    ]);
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server lokalno radi na http://localhost:${PORT}`);
    });
}

module.exports = app;