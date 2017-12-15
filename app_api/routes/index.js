var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/app.js');

router.get('/categories', ctrlMain.giphyCategories);

module.exports = router;
