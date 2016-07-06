$(function() {
    var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

    // Code goes here!
    //Write and call a function that expects an array as an argument. 
    //Within this function, append a <ul> to the DOM with the ID avengers.

    //Next, still within this function, write a loop that creates an <li> 
    //and appends it to the ul for each item in the array. For each item, add a class corresponding to the item's content. 
    //For example, the first item in the array should have an element that looks like <li class="iron-man">Iron Man</li>.
    //Hint
    //.split(), .join(), .toLowerCase() and .replace() are some useful functions you might investigate.


    // var ul = $('<ul>');
    // var group = function (array) {
    //     ul.appendTo('body').attr('id=avengers');
    //     for (var i = 0; i < array.length; i++) {
    //         var className = array[i].split(" ").join("-").toLowerCase();
    //         var newLi = $('<li>').text(array[i]).addClass(className);
    //         $(newLi).appendTo(ul);
    //     }
    // }; 
    // group(avengers);

    function createAvengersList(avengers, id) {
        var $ul = $('<ul>')
            .attr('id', 'avenger')
            .append(_.map(avengers, function(avenger, index) {
                return createAvengerListItem(avenger);
            }));
        return $ul;
    }


    function createAvengerListItem(avenger) {
        return $('<li>')
            .attr("class", toDashCase(avenger))
            .html(avenger);
    }

    function toDashCase(str) {
        return str.split(" ").join("-").toLowerCase();
    }

    createAvengersList(avengers, 'avenger').appendTo('body');

    //Write and call a new function that removes the <li>s for Ant Man and Wasp, and adds an <li> for Captain America.
    var changeMembers = function(array) {
        $('.wasp').remove();
        $('.ant-man').remove();
        $('<li>').html('Captain America').attr('class', "captain-america").appendTo('#avenger');
    };
    changeMembers(avengers);

    //Sort the array alphabetically before adding the elements to the DOM
    //Sort the elements alphabetically after they're in the DOM
    //Create a button that moves the first element to the bottom of the list when clicked
    //Add Set Timeout so that items appear on the page one at a time.


    function sortListAlpha(id) {
        // var $listItems = $('#' + id + ' li').sort(function(a, b) {
        //     return ($(b).text()) < ($(a).text()) ? 1 : -1;
        // });
        // $listItems.appendTo('#' + id);

        $('#' + id + ' li').sort(ascSort).appendTo('#' + id);

        function ascSort(a, b) {
            return ($(b).text()) < ($(a).text()) ? 1 : -1;
        }
    }
    sortListAlpha('avenger');

    $('<button>', {
        text: 'One At a Time',
        id: 'btnOneAtATime',
        click: function() {
            var listAvengers = $('#avenger');
            listAvengers.empty();
            avengers.forEach(function(avenger, index) {
                setTimeout(function() {
                    listAvengers.append(createAvengerListItem(avenger));
                }, 500 * index);
            });
        }
    }).appendTo('body');

});
