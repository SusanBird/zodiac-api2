const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router().get('/zodiacs/', (req, res) => {
    res.json(zodiacs);
});