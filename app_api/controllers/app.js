var GphApiClient = require('giphy-js-sdk-core');
client = GphApiClient("Ans87FFXzgivvyGFdLZaCZphJsngJBYU");

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.giphyCategories = function(req, res, next) {
    client.categoriesForGifs({})
    .then((response) => {
        sendJSONresponse(res, 200, response.data);
    })
    .catch((err) => {
        console.log(err);
    })
}

