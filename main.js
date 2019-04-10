printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

// function to get the JSON file data //
const getPlacesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeSAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/places.json');
    myRequest.send();
}

// event listeners being called in getPlacesData * never use fat arrow functions with these * //
function executeThisCodeSAfterFileLoads() {
    const data = JSON.parse(this.responseText);
    places = data.places;
    buildPlaces(data.places);
}

function executeThisCodeIfXHRFails() {
  console.error('I fucked up!');
}

const buildPlaces = () => {

    let domStringBuilder = '';

    places.forEach((place) => {
    domStringBuilder += `<div class="col-sm-1 col-md-3 col-lg-4">`
    domStringBuilder += `<div class="card text-center">`
    domStringBuilder +=     `<h3 class="card-header">${place.cityName}</h3>`
    domStringBuilder +=     `<div class="card-body">`
    domStringBuilder +=     `<h3 class="card-header"><img class="placePic" src="${place.imgUrl}" /></h3>`
    domStringBuilder +=         `<h5 class="card-title">${place.cityState}</h5>`
    domStringBuilder +=         `<p class="card-text">${place.favoriteRestaurant}</p>`
    domStringBuilder +=         `<p class="card-text">${place.favoriteBar}</p>`
    domStringBuilder +=         `<p class="card-text">${place.favoriteHotel}</p>`
    domStringBuilder +=     `</div>`
    domStringBuilder +=     `<p class="card-footer text-muted">${place.favoriteTouristAttraction}</p>`
    domStringBuilder +=     `</div>`
    domStringBuilder += `</div>`
    });
    printToDom('fav-places', domStringBuilder);
}



init = () => {
  getPlacesData();
}
init();