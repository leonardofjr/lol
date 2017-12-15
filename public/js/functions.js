const giphyURL = 'http://api.giphy.com';
const giphyTrendingEndpoint = '/v1/gifs/trending';
const apiKey = 'Ans87FFXzgivvyGFdLZaCZphJsngJBYU';
$.ajax({
    url: giphyURL + giphyTrendingEndpoint + '?api_key=' + apiKey,
    context: document.body
}).done(function (response, textStatus, jqXHR) {
   console.log(response.data);
}).fail(function(jqXHR, textStatus, errorThrown) {
    console.log(errorThrown);
})