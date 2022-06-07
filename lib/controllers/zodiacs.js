const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()

.get('/', (req, res) => {
    res.json(zodiacs);
});