let starhipsUrl = `https://swapi.dev/api/starships/9/`;
let data = {};

function showShipInfo(shipInfo) {
    let div = $('#info');
    let p = $('<p></p>');

    p.text(`
        Name: ${shipInfo.name}
        starship_class: ${shipInfo.starship_class}
        manufacturer: ${shipInfo.manufacturer}
    `);

    div.append(p);
}

function getData(url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (response) {
            console.log(response);
            showShipInfo(response);
        },
        error: function (error) {
            console.log(error);
        }
    })
}

getData(starhipsUrl);
console.log(data);


let a = (function () { return 3; })(); // self invoked function