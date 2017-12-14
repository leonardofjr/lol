var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/app.js');

/* GET home page. */
router.get('/', ctrlMain.giphyCategories);

module.exports = router;
