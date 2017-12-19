const giphyURL = 'http://api.giphy.com';
const giphyTrendingEndpoint = '/v1/gifs/trending';
const apiKey = 'Ans87FFXzgivvyGFdLZaCZphJsngJBYU';
var limit = 25;
var offset = 0;

function callGiphyTrending(limit, offset) {
    $.ajax({
        url: giphyURL + giphyTrendingEndpoint + '?api_key=' + apiKey + '&limit=' + limit + '&offset=' + offset,
        context: document.body
        }).done(function (response, textStatus, jqXHR) {
            renderGiphyTrendingImages(response.data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
    })
}

function renderGiphyTrendingImages(data) {
    renderImagesFromArray(data, 'trending-container');
    checkScroll();
    
}



function checkScroll() {
    if (countNumberOfChildElements('trending-container') === 25); {
        $(window).on("scroll", function() {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                loadMoreImages();
            }
        });
    }
}

function loadMoreImages() {
    $(window).off("scroll");
    offset += 25;    
    callGiphyTrending(limit, offset);
}


 // Helper Functions
// The data parameter is used to pass the array of data and the target is used to target where the data be rendered in
function renderImagesFromArray(data, target) {
    var imgContainer = document.getElementById(target);    
    return data.forEach(function(item) {
        var img = document.createElement('img');
        imgContainer.append(img);
        img.setAttribute('src', item.images.fixed_width.url)
    }) 
}

function countNumberOfChildElements(parent) {
    return document.getElementById(parent).childElementCount;

}

 callGiphyTrending(limit, offset);
 