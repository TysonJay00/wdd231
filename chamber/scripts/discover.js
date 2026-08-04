import { places } from '../data/merida.mjs'
console.log(places)

//----------------grab a reference to the division where we display the items
const showHere = document.querySelector("#allplaces")
console.log(showHere);

//----------------loop through the array of json items
function displayItems(places) {
    places.slice(1).forEach((x, index) => {

        const card = document.createElement('div');
        card.classList.add("card");

        const photo = document.createElement('img');
        photo.src = x.image;
        photo.alt = x.name;
        photo.width = 300;
        photo.height = 200;
        photo.loading = "lazy";
        photo.decoding = "async";
        card.appendChild(photo);

        const title = document.createElement('h2');
        title.innerText = x.name;
        card.appendChild(title);

        const address = document.createElement('address');
        address.innerText = x.address;
        card.appendChild(address);

        const description = document.createElement('p');
        description.innerText = x.description;
        card.appendChild(description);

        showHere.appendChild(card);
    });
}  //end function

//start displaying all items in the json file
displayItems(places)

/****************date and time of visits on the page */

const visitMessage = document.querySelector("#visit-message");

const now = Date.now();

const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions."
} else {
    const millisecondsBetween = now - Number(lastVisit);
    const daysBetween = millisecondsBetween / (1000 * 60 * 60 * 24);

    if (daysBetween < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";

    } else {
        const wholeDays = Math.floor(daysBetween);

        if (wholeDays === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${wholeDays} days ago.`;
        }
    }
}

localStorage.setItem("lastVisit", now);


