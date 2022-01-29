$(document).ready(function () {
    let baseUrl = 'https://swapi.dev/api/';
    let nextPageUrl = null;
    let prevPageUrl = null;

    function showStarWarsCharacters(characters, nextPage, prevPage) {
        let ul = $('#people').html('');
        for (let character of characters) {
            let li = $('<li></li>');
            let liHtml = $(`
                <p>Name: ${character.name}</p>
                <button class='btn-more-info' value='${character.url}'>Show more info</button>
            `);
            li.html(liHtml);
            ul.append(li);
        }

        if (nextPage) {
            $('#next').show();
        } else {
            $('#next').hide();
        }

        if (prevPage) {
            $('#prev').show();
        } else {
            $('#prev').hide();
        }
    }

    function getStarwarsCharacters(url) {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (response) {
                console.log(response);
                showStarWarsCharacters(response.results, response.next, response.previous);
                nextPageUrl = response.next;
                prevPageUrl = response.previous;
            },
            error: function (error) {
                console.log(error);
            }
        })
    }

    

    $('#get-data').on('click', function () {
        $.ajax({
            url: `${baseUrl}people/`,
            method: 'GET',
            success: function (response) {
                console.log(response);
                //let responseObj = JSON.parse(response);
                showStarWarsCharacters(response.results, response.next, response.previous);
                nextPageUrl = response.next;
                prevPageUrl = response.previous;
            },
            error: function (error) {
                console.log(error);
            }
        });
    });

    $('#next').on('click', function () {
        console.log('NEXT');
        getStarwarsCharacters(nextPageUrl);
    });

    $('#prev').on('click', function () {
        console.log("PREV");
        getStarwarsCharacters(prevPageUrl);
    });

    $('#people').on('click', function (event) {
        console.log(event);
        if (event.target.nodeName === "BUTTON") {
            
        }
    })

});