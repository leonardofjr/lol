var fetch = require('node-fetch');
var giphyURL = 'http://localhost:3000/api';
var categoriesEndpoint = '/categories';
var trendingEndpoint = '/trending';

var getCategories = function (req, res, next) {
    fetch(giphyURL + categoriesEndpoint)
        .then(function (res) {
            return res.json();
        })
        .then(function (body) {
            renderCategoriesPage(req, res, next, body)
        })
}

var renderCategoriesPage = function (req, res, next, content) {
    res.render('categories', {
        giphyCategories: content,
        title: 'Categories',
        metaAuthor: 'Leonardo Felipa',
        metaDescription: 'Boilerplate',
        metaKeywords: 'Boilerplate, HTML5, CSS3, ExpressJS, NodeJS, Mongo, Mongoose, Angular'
    });
}



module.exports.getCategoriesPage = function (req, res, next) {
    getCategories(req, res, next);
}

module.exports.getHomePage = function (req, res, next) {
    res.render('index', {
        title: 'Trending',
        metaAuthor: 'Leonardo Felipa',
        metaDescription: 'Boilerplate',
        metaKeywords: 'Boilerplate, HTML5, CSS3, ExpressJS, NodeJS, Mongo, Mongoose, Angular'
    });
}