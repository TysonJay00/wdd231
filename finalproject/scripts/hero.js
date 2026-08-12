import { robins } from '../data/robin.js'
// console.log(robin)

const showHere = document.querySelector("#showHere")
const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialogh2')
const myclose = document.querySelector('#mydialog button')
const myinfo = document.querySelector('#mydialog p')

myclose.addEventListener('click', () => mydialog.close())

function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = x.path
        photo.alt = x.name
        photo.width = 300;
        photo.height = 225;
        photo.loading = "lazy";

        photo.addEventListener('click', () => showStuff(x))
        showHere.append(photo)
    })
}

displayItems(robins)

function showStuff(x) {
    mytitle.textContent = x.name
    myinfo.textContent = x.description;
    mydialog.showModal()
}


document.addEventListener("DOMContentLoaded", () => {

    const character = [
        { name: "Dick Grayson" },
        { name: "Jason Todd" },
        { name: "Tim Drake" },
        { name: "Damien Wayne" }
    ];

    const select = document.querySelector("#characterSelect");
    const button = document.querySelector("#save");
    const output = document.querySelector("#output");

    console.log("Select:", select);
    console.log("Button:", button);
    console.log("Output:", output);


    function loadCharacter() {
        select.innerHTML = `<option value="">-- Choose a Robin --</option>`;

        character.forEach((robin) => {
            const option = document.createElement("option");

            option.value = robin.name;
            option.textContent = robin.name;

            select.appendChild(option);
        });
    }


    function saveFavourite() {
        const picked = select.value;

        console.log("You selected:", picked);

        if (picked === "") {
            output.textContent = "Please select a Robin.";
            return;
        }

        localStorage.setItem("favouriteRobin", picked);

        console.log("Saved to localStorage:",
            localStorage.getItem("favouriteRobin")
        );

        output.textContent = `Your favourite Robin is ${picked}!`;
    }


    function displayFavourite() {
        const savedRobin = localStorage.getItem("favouriteRobin");

        console.log("Loaded from localStorage:", savedRobin);

        if (savedRobin) {
            select.value = savedVillain;
            output.textContent = `Your favourite Robin is ${savedRobin}!`;
        } else {
            output.textContent = "No Robin has been selected yet.";
        }
    }


    loadCharacter();

    displayFavourite();

    button.addEventListener("click", saveFavourite);

});
