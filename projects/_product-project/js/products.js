$(document).ready(function() {
    // ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('data/product.json', function(products) {
        initializeUI(products);
        filterType(products);
        createProductList(products).appendTo('#products-container');
        lightboxPanel(products).appendTo('#container');
        lightbox().appendTo('#container');
        initializeLightbox(products);
    });

    // ALL YOUR CODE GOES ABOVE HERE //
});

//PRODUCTS

function initializeUI(products) {
    $('#button-search').click(function(event) {
        event.preventDefault();
        // console.log('clicked');
        $('.li-product').empty();
        var target = document.getElementById('input').value;
        return _.map(reduceSearch(products, target), function(product) {
            return createProductListItem(product).appendTo('body');

        });
    });
}

// 1. To create a list item for every new type
// 2. On click of that item only show items that match that id
function filterType(products) {
    var newCollection = _.uniq(_.pluck(products, 'type'));
    var listys = _.map(newCollection, function(type, index) {
        return $('<li>').attr('id', type).append(type).appendTo('.dropdown-menu').click(function() {
            $('.li-product').empty();
            _.map(products, function(product) {
                if (product.type === type) {
                    return createProductListItem(product).appendTo('body');
                }
            });
        });
    });
    return listys;
}

function createProductList(products) {
    return $('<ul>')
        .attr('id', 'list-products')
        .addClass('list-products')
        .append(_.map(products, function(product, index) {
            return createProductListItem(product);
        }));
}

function createProductListItem(product) {
    return $('<li>')
        .attr('id', product.id)
        .addClass('li-product')
        .append(createProductImageDiv('img/product/thumbs/' + product.image))
        .append(createProductsDetailsDiv(product.desc, product.price, product.stock));
}

function createProductImageDiv(url) {
    return $('<div>').append($('<img>').attr('src', url)).addClass('image');
}

function createProductsDetailsDiv(desc, price, stock) {
    var desc = $('<div>')
        .addClass('desc')
        .html(desc);
    var price = $('<div>')
        .addClass('price')
        .html('Price: $' + price);
    var stock = $('<div>')
        .addClass('stock')
        .html("In stock: " + stock);

    return $('<div>').addClass('product-details').append(desc, price, stock);
}
//RECURSION FUNCTION

function reduceSearch(collection, target) {
    return _.reduce(collection, function(summary, value) {
        if (isCollection(value)) {
            if (reduceSearch(value, target).length) {
                summary.push(value);
            }
        }
        else if (typeof value === 'string') {
            if (value.toLowerCase().indexOf(target.toLowerCase()) > -1) {
                summary.push(value);
            }
        }
        return summary;
    }, []);
}

function isCollection(value) {
    if (value !== null && value instanceof Date === false && typeof value === 'object') {
        return true;
    }
    return false;
}


// LIGHTBOX

// pacifier = opspark.makePacifier($lightbox[0]);
// pacifier.stop();

// function initializeLightbox(products) {
//     $(".image").click(function(event) {
//         event.preventDefault();
//         $("#lightbox, #lightbox-panel").fadeIn(300);
//         });
//     $("a#close-panel").click(function() {
//         $("#lightbox, #lightbox-panel").fadeOut(300);
//     });
//  }
 
// function lightboxPanel(products) {
//     return $('<div>')
//         .attr('id', 'lightbox-panel')
//         .html('<p align="center"><a id="close-panel" href="#">Close this window</a></p>')
//         .append(_.filter(products, function(product) {
//                 return lightboxPanelItem(product) === product.id;
//             }
//         ));
// }

// function lightbox() {
//     return $('<div>').attr('id', 'lightbox');
// }

// function lightboxPanelImage(url) {
//     return $('<div>').append($('<img>').attr('src', url)).addClass('lightbox-image');
// }

// function lightboxPanelDetails(desc, price, stock, availableColors, specs) {
//     var desc = $('<div>')
//         .addClass('desc')
//         .html(desc);
//     var price = $('<div>')
//         .addClass('price')
//         .html('Price: $' + price);
//     var stock = $('<div>')
//         .addClass('stock')
//         .html("In stock: " + stock);
//     var availableColors = $('<div>')
//         .addClass('availableColors')
//         .html('Available colors: ' + availableColors);
//     var specs = $('<div>')
//         .addClass('specs')
//         .html(specs);

//     return $('<div>').addClass('lightbox-details').append(desc, price, stock, availableColors, specs);
// }

// function lightboxPanelItem(product) {
//     return $('<div>')
//         .attr('id', product.id)
//         .addClass('lightbox-product')
//         .append(lightboxPanelImage('img/product/' + product.image))
//         .append(lightboxPanelDetails(product.desc, product.price, product.stock, product.availableColors, product.specs));
// }
