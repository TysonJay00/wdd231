const showHere = document.querySelector("#allvillians");

async function getVillians() {

    try {
        const response = await fetch("data/villians.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const villians = await response.json();

        displayItems(villians);

    } catch (error) {
        console.error("Error fetching villain data:", error);

        showHere.innerHTML = `
            <p>Sorry, the villain information could not be loaded.</p>
        `;
    }
}


function displayItems(villians) {

    villians.forEach((x) => {

        const card = document.createElement("div");
        card.classList.add("card");

        // Image
        const photo = document.createElement("img");
        photo.src = x.image;
        photo.alt = x.name;
        photo.loading = "lazy";

        card.appendChild(photo);


        // Name
        const title = document.createElement("h2");
        title.innerText = x.name;

        card.appendChild(title);


        // First Appearance
        const appearance = document.createElement("p");
        appearance.classList.add("first-appearance");

        const appearanceLabel = document.createElement("strong");
        appearanceLabel.textContent = "First Appearance:";

        appearance.appendChild(appearanceLabel);
        appearance.appendChild(document.createElement("br"));
        appearance.append(x["first-appearance"]);

        card.appendChild(appearance);


        // Fact
        const description = document.createElement("p");
        description.classList.add("fact");
        description.innerText = x.fact;

        card.appendChild(description);


        // Add card to page
        showHere.appendChild(card);
    });
}

getVillians();

document.addEventListener("DOMContentLoaded", () => {
    const character = [
        { name: "Joker" },
        { name: "Bane" },
        { name: "Ra's Al Ghul" },
        { name: "Scarecrow" },
        { name: "The Riddler" },
        { name: "The Penquin" },
        { name: "Mr. Freeze" },
        { name: "Harley Quinn" }
    ];

    const select = document.querySelector('#characterSelect');
    const button = document.querySelector('#save');
    const output = document.querySelector('#output');



    function loadCharacter() {

        select.innerHTML = `<option value="">--choose a villian--</option>
    `;

        character.forEach((villain) => {

            select.innerHTML += ` 
        <option value="${villain.name}"> 
        ${villain.name} </option> 
        `;
        });
    }

    function saveFavourite() {
        const picked = select.value;

        if (picked === "") {
            output.textContent = "Please select a villian.";
            return;
        }

        localStorage.setItem('favouriteVillian', picked);
        displayFavourite();
    }

    function displayFavourite() {
        const fav = localStorage.getItem("favouriteVillian");

        if (!fav) {
            output.textContent = "No villian has been selected yet";
            return;
        }

        select.value = fav;

        const selectedCharacter = character.find((villian) => villian.name === fav);

        if (selectedCharacter) {
            output.innerHTML = `Your favourite villian is <strong>${selectedCharacter.name}</strong>`;
        } else {
            output.textContent = "Saved villian not found";
        }
    }

    button.addEventListener("click", saveFavourite);

    loadCharacter();
    displayFavourite();
});