var express = require('express');
var router = express.Router();

router.use('/listaTelefonica', require('./listaTelefonica'));
router.use('/stromppers', require('./stromppers'));
router.use('/auth', require('./auth'));

module.exports = router;

