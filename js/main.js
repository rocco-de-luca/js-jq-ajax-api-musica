/**
 * Attraverso una chiamata ajax all’Api di boolean avremo a 
 * disposizione una decina di dischi musicali. 
Servendoci di handlebars stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.

*/

$(document).ready(function () {

    // Refs
    var apiMusic = 'https://flynn.boolean.careers/exercises/api/array/music';
    var cd = $('.cds-container');

    // Init Handlebars
    var source = $('#album-template').html();
    var template = Handlebars.compile(source);

    $.ajax({
        url: apiMusic,
        method: 'GET',
        success: function (data) {
            var albums = data.response;
            for (var i = 0; i < albums.length; i++) {
                var item = template(albums[i]);
                console.log(item);
                cd.append(item);
            }

        },
        error: function () {
            console.log('Si è verificato un errore');
        }
    });

    /**
     * Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
    In base a cosa scegliamo nella select vedremo i corrispondenti cd.
    */
    $("#genres").change(function () {
        console.log("Changed in", $(this).val());
        var genre = $(this).val();
        if (genre === "all") {
            $(".cd").show();
        } else {
            $(".cd").hide();
            $(".cd." + genre).show();
        }

    });

});