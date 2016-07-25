/* global $ _ */
$(document).ready(function() {
    $.getJSON('data.json', function(data) {
            // YOUR CODE BELOW HERE //
            /*
             * Style the #section-bio and #section-quotes as per some of the 
             * examples we tried in the console.
             *
             *
             * 1. Populate the #list-top-rated <ul>:
             *
             * Loop through the top rated recordings of Billy Higgins, and, 
             * using lodash, add a styled <li> for each recording. Inspect a 
             * recording object in the console to view its available properties.
             *
             * How can you use _.map() to your advantage here?
             */
            let topRated = data.discography.topRated;
            let recordings = data.discography.recordings;
            
            let topRatedAlbumImages = topRated.map(function(recording) {
                return recording.art;
            });
            
            let randomTopRatedAlbumPic = topRatedAlbumImages[Math.floor(Math.random() * topRatedAlbumImages.length)];
            
            $('<img>').addClass('img-top-recording').attr('src', randomTopRatedAlbumPic)
                .appendTo('#list-top-rated');
            
            let topRatedRecordingListItem = _.map(topRated, function(recording) {
                return $('<li>')
                    .addClass('recording-top-rated')
                    .attr('url', recording.art)
                    .append($('<div>').addClass('title').text(recording.title));
            });
            
            $('#list-top-rated').append(topRatedRecordingListItem);
            
            let imageTopRecording = $('.img-top-recording');
            
            $('.recording-top-rated').on('click', function(event) {
                var imageUrl = $(event.currentTarget).attr('url');
                imageTopRecording.fadeOut(100, function() {
                    imageTopRecording.attr('src', imageUrl);
                    $(this).fadeIn(100);
                });
            });
            /*
             * 2. Create a discography <section>:
             *      a. Create a discography <section id="section-disc"> and add it 
             *         below the and add it below the #section-quotes on the 
             *         index.html page.
             * 
             *      b. Create a <ul id="list-disc">, style it, and add it to the 
             *         <section id="section-disc">.
             * 
             *      c. Add a styled <li class="recording"> for every recording in 
             *         the recordings Array. What lodash methods can help you here?
             *
             *      d. Add CSS styling rules to the site.css file to style the list
             *
             *      The resulting HTML should look something like this:
             *
             *         <section id="section-disc">
             *           <ul id="list-disc">
             *               <li class="recording">
             *                   <div class="title">Title: Eastern Rebellion</div>
             *                   <div class="artist">Artist: Cedar Walton</div>
             *                   <div class="release">Release: Timeless</div>
             *                   <div class="year">Year: 1976</div>
             *               </li>
             *           </ul>
             *       </section>
             */
            $('<section>').attr('id', 'section-disc').appendTo('.sidebar');
            $('<header>').addClass('header-recordings').html('Recordings').appendTo('#section-disc');
            
            let albumImages = recordings.map(function(recording) {
                return recording.art;
            });
            
            let randomAlbumPic = albumImages[Math.floor(Math.random() * albumImages.length)];
            
            $('<img>').addClass('img-recording').attr('src', randomAlbumPic)
                .appendTo('#section-disc');
                
            let billysImages = data.images.billy;
            
            let index = 1;
            let imageBilly = $('#image-billy');
            
            $('#image-container-billy').on('click', function(event) {
                let image = billysImages[index++];
                if (index === billysImages.length) {
                    index = 0;
                }
                imageBilly.fadeOut(100, function() {
                    imageBilly.attr('src', image);
                    $(this).fadeIn(100);
                });
            });
            
            $('<ul>').attr('id', 'list-disc').appendTo('#section-disc');
            
            let recordingsListItem = _.map(recordings, function(recording) {
                return $('<li>')
                    .addClass('recording')
                    .attr('url', recording.art)
                    .append($('<div>').addClass('title').text(recording.title));
            });
            
            $('#list-disc').append(recordingsListItem);
            
            let imageRecording = $('.img-recording');
            
            $('.recording').on('click', function(event) {
                var imageUrl = $(event.currentTarget).attr('url');
                imageRecording.fadeOut(100, function() {
                    imageRecording.attr('src', imageUrl);
                    $(this).fadeIn(100);
                });
            });
            /*
             * 3. Below the <section id="section-disc">, create a new section for 
             * Billy's rider. Use jQuery to assemble a table to display the rider 
             * data. The rider data is at data.rider
             */
            let riders = data.rider;
            
            $('<section>').attr('id', 'section-billys-rider').appendTo('#sections');
            $('<h3>').html("Billy's Rider").appendTo('#section-billys-rider');
            
            let createTable = function(riders) {
                let createRow = function(rider) {
                    let $row = $("<tr>");
                    let $type = $("<td>").text(rider.type);
                    let $desc = $("<td>").text(rider.desc);
                    $row.append($type);
                    $row.append($desc);
                    return $row;
                };
                let $table = $("<table>");
                let $rows = riders.map(createRow);
                $table.append($rows);
                return $table;
            };
            
            let myTable = createTable(riders);
            
            $('#section-billys-rider').append(myTable);
            
            // YOUR CODE ABOVE HERE //
        })
        .fail(function() {
            console.log('getJSON on discography failed!');
        });
});
