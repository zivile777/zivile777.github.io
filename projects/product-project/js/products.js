/*global $ _*/
$(document).on('ready', function(event) {
    $.getJSON('data/product.json', function(products) {
        createProductList(products).appendTo('.flex-container');
        filterType(products);
        lowestToHighest(products);
        highestToLowest(products);
        showAll(products);
        searchTarget(products);
        initializeLightbox(products);
    }).fail(function() {
        console.log("getJSON on product data failed!");
    });

});

// 1. To create a list item for every new type
// 2. On click of that item only show items that match that id
function filterType(products) {
    var pluckedTypes = _.unique(_.pluck(products, "type"));
    var filteredlists = _.map(pluckedTypes, function(pluckedType) {
        return $('<li>')
            .attr('id', 'type')
            .append($('<a href="#">').html(pluckedType))
            .prependTo('.dropdown-menu')
            .on('click', function() {
                $('.list-products').hide();
                $('.thumbnail').hide();
                _.map(products, function(product) {
                    if (product.type === pluckedType) {
                        return createProductListItem(product).appendTo('.flex-container');
                    }
                });
                initializeLightbox(products);
            });
    });
    return filteredlists;
}

function lowestToHighest(products) {
    $('.lowest').on('click', function() {
        $('.list-products').hide();
        $('.thumbnail').hide();
        _.map(lowest(products, "price"), function(product) {
            return createProductListItem(product).appendTo('.flex-container');
        });
        initializeLightbox(products);
    });

}

function lowest(products, key) {
    return products.sort(function(a, b) {
        return a[key] - b[key];
    });
}

function highestToLowest(products) {
    $('.highest').on('click', function() {
        $('.list-products').hide();
        $('.thumbnail').hide();
        _.map(highest(products, "price"), function(product) {
            return createProductListItem(product).appendTo('.flex-container');
        });
        initializeLightbox(products);
    });
}

function highest(products, key) {
    return products.sort(function(a, b) {
        return b[key] - a[key];
    });
}

function showAll(products) {
    $('.allproducts').on('click', function() {
        $('.list-products').hide();
        $('.thumbnail').hide();
        var newList = _.map(products, function(product) {
            createProductListItem(product).appendTo('.flex-container');
        });
        initializeLightbox();
        return newList;
    });
}

function searchTarget(products) {
    $('#button-search').on('click', function(event) {
        event.preventDefault();
        //console.log('clicked');
        $('.list-products').hide();
        $('.thumbnail').hide();
        var target = document.getElementById('input').value;
        _.map(search(products, target), function(product) {
            return createProductListItem(product).appendTo('.flex-container');
        });
        initializeLightbox(products);
    });
}

function initializeLightbox(products) {
    $('.thumbnail').on('click', function(event) {
        $('.modal-body').empty();
        var imageUrl = $(event.currentTarget).attr('url');
        var specs = $(event.currentTarget).attr('specs');
        var price = $(event.currentTarget).attr('price');
        $('.modal-body').append($('<img>').attr('src', imageUrl).attr('id', 'temp-image').addClass('col-sm-6 col-md-6'))
            .append($('<p>').html('Price: ' + price + '<br><br><br>' + specs ).addClass('col-sm-6 col-md-6'));
        $('#myModal').modal('show');
        $('.close').one('click', function() {
            $('.modal-body').empty();
            
        });

    });
}

//create ul, add id, class, dynamically add product item
function createProductList(products) {
    return $('<ul>')
        .attr('id', 'list-products')
        .addClass('list-products')
        .append(_.map(products, function(product, index) {
            return createProductListItem(product);
        }));
}
//create a single product list item, add id, class, add small image, attribute big image's url for event handler
function createProductListItem(product) {
    return $('<li>')
        .attr('id', 'li-product')
        .addClass('thumbnail')
        .attr('url', 'img/product/' + product.image)
        .attr('specs', product.specs)
        .attr('price', product.price)
        .append(createProductImageDiv('img/product/thumbs/' + product.image))
        .append(createProductsDetailsDiv(product.desc, 'Price: $' + product.price.toFixed(2), 'Left in stock: ' + product.stock));
}

//create product image div    
function createProductImageDiv(url) {
    return $('<div>').addClass('image-div')
        .append($('<img>').attr('src', url).addClass('image'));
}

function createProductsDetailsDiv(desc, price, stock) {
    var desc = $('<div>')
        .addClass('desc')
        .html(desc);
    var price = $('<div>')
        .addClass('price')
        .html(price);
    var stock = $('<div>')
        .addClass('stock')
        .html(stock);
    return $('<div>').addClass('product-details').append(desc, price, stock);
}

//recursion function

function isCollection(value) {
    //weeds out false positives for objects and returns true if value is Array or Object intended as collection
    if (typeof value !== null && value instanceof Date === false && typeof value === "object") {
        return true;
    }
    return false;
}

function search(collection, target) {
    var output = [];
    _.each(collection, function(value) {
        if (typeof value === "string") {
            if (value.toLowerCase().indexOf(target.toLowerCase()) > -1) {
                output.push(value);
            }
        }
        else if (isCollection(value)) {
            if (search(value, target).length) {
                output.push(value);
            }
        }
    });
    return output;
}
