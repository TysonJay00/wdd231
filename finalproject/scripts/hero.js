

import { robins } from "../data/robin.js";

document.addEventListener("DOMContentLoaded", () => {

    const showHere = document.querySelector("#showHere");

    const mydialog = document.querySelector("#mydialog");
    const mytitle = document.querySelector("#mydialogh2");
    const myclose = document.querySelector("#mydialog button");
    const myinfo = document.querySelector("#mydialog p");

    const select = document.querySelector("#characterSelect");
    const button = document.querySelector("#save");
    const output = document.querySelector("#output");


    // Display Robin images
    function displayItems(data) {

        data.forEach((x) => {

            const photo = document.createElement("img");

            photo.src = x.path;
            photo.alt = x.name;
            photo.width = 300;
            photo.height = 225;
            photo.loading = "lazy";

            // Event listener for clicking Robin image
            photo.addEventListener("click", () => {
                showStuff(x);
            });

            showHere.appendChild(photo);
        });
    }


    // Show Robin information in dialog
    function showStuff(x) {

        mytitle.textContent = x.name;
        myinfo.textContent = x.description;

        mydialog.showModal();
    }


    // Close dialog
    myclose.addEventListener("click", () => {
        mydialog.close();
    });


    // Load Robin choices into select
    function loadCharacter() {

        select.innerHTML = `
            <option value="">-- Choose a Robin --</option>
        `;

        const character = [
            { name: "Dick Grayson" },
            { name: "Jason Todd" },
            { name: "Tim Drake" },
            { name: "Damian Wayne" }
        ];

        character.forEach((robin) => {

            const option = document.createElement("option");

            option.value = robin.name;
            option.textContent = robin.name;

            select.appendChild(option);
        });
    }


    // Save favourite Robin
    function saveFavourite() {

        const picked = select.value;

        if (picked === "") {

            output.textContent = "Please select a Robin.";
            return;
        }

        localStorage.setItem("favouriteRobin", picked);

        output.textContent =
            `Your favourite Robin is ${picked}!`;
    }


    // Display saved favourite Robin
    function displayFavourite() {

        const savedRobin =
            localStorage.getItem("favouriteRobin");

        if (savedRobin) {

            select.value = savedRobin;

            output.textContent =
                `Your favourite Robin is ${savedRobin}!`;

        } else {

            output.textContent =
                "No Robin has been selected yet.";
        }
    }


    // Run functions
    displayItems(robins);
    loadCharacter();
    displayFavourite();


    // Event listener for save button
    button.addEventListener("click", saveFavourite);

});