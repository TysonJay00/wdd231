

const showHere = document.querySelector("#allvillains");

async function getVillains() {

    try {
        const response = await fetch("data/villains.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const villains = await response.json();

        displayItems(villains);

    } catch (error) {
        console.error("Error fetching villain data:", error);

        showHere.innerHTML = `
            <p>Sorry, the villain information could not be loaded.</p>
        `;
    }
}


function displayItems(villains) {

    villains.forEach((x) => {

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

getVillains();

document.addEventListener("DOMContentLoaded", () => {

    const character = [
        { name: "The Joker" },
        { name: "Bane" },
        { name: "Ra's Al Ghul" },
        { name: "The Scarecrow" },
        { name: "The Riddler" },
        { name: "The Penquin" },
        { name: "Mr. Freeze" },
        { name: "Harley Quinn" },
        { name: "Killer Croc" },
        { name: "Firefly" },
        { name: "Catwoman" },
        { name: "Poison Ivy" },
        { name: "Man-Bat" },
        { name: "Two-Face" },
        { name: "Clayface" }
    ];

    const select = document.querySelector("#characterSelect");
    const button = document.querySelector("#save");
    const output = document.querySelector("#output");

    console.log("Select:", select);
    console.log("Button:", button);
    console.log("Output:", output);


    function loadCharacter() {
        select.innerHTML = `<option value="">-- Choose a villain --</option>`;

        character.forEach((villain) => {
            const option = document.createElement("option");

            option.value = villain.name;
            option.textContent = villain.name;

            select.appendChild(option);
        });
    }


    function saveFavourite() {
        const picked = select.value;

        console.log("You selected:", picked);

        if (picked === "") {
            output.textContent = "Please select a villain.";
            return;
        }

        localStorage.setItem("favouriteVillain", picked);

        console.log("Saved to localStorage:",
            localStorage.getItem("favouriteVillain")
        );

        output.textContent = `Your favourite villain is ${picked}!`;
    }


    function displayFavourite() {
        const savedVillain = localStorage.getItem("favouriteVillain");

        console.log("Loaded from localStorage:", savedVillain);

        if (savedVillain) {
            select.value = savedVillain;
            output.textContent = `Your favourite villain is ${savedVillain}!`;
        } else {
            output.textContent = "No villain has been selected yet.";
        }
    }


    loadCharacter();

    displayFavourite();

    button.addEventListener("click", saveFavourite);

});