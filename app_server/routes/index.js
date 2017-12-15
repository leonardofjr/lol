var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/app.js');

/* GET home page. */
router.get('/categories', ctrlMain.getCategoriesPage);
router.get('/', ctrlMain.getHomePage);

module.exports = router;
