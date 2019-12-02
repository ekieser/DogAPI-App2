'use strict';
function retrieveImages(num) {
    for (let i = 0; i < num; i++) {
        if (num <= 50) {
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(responseJson => logDogs(responseJson))
            .catch(error => alert('An error occured. Try again later'))
        }
    };
    if (num > 50) {
        alert('Must be lower than 50. Try again');
    }
}

function logDogs(responseJson) {
    console.log(responseJson);
    $('#dog-display').append(`<img src="${responseJson.message}" class="img-results">`)
}

function submitForm() {
    $('form').submit(event => {
        event.preventDefault(); 
        let dogNum = document.getElementById('number-entry').value;
        retrieveImages(dogNum);
    });
}

$(submitForm);

