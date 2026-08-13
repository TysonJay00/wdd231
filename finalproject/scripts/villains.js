
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

    villains.forEach((x, index) => {

        const card = document.createElement("div");
        card.classList.add("card");

        const photo = document.createElement("img");
        photo.src = x.image;
        photo.alt = x.name;
        photo.width = 300;
        photo.height = 400;

        if (index === 0) {
            photo.loading = "eager";
            photo.fetchPriority = "high";
        } else {
            photo.loading = "lazy";
        }

        card.appendChild(photo);

        const title = document.createElement("h2");
        title.textContent = x.name;
        card.appendChild(title);

        const appearance = document.createElement("p");
        appearance.classList.add("first-appearance");

        const appearanceLabel = document.createElement("strong");
        appearanceLabel.textContent = "First Appearance:";

        appearance.appendChild(appearanceLabel);
        appearance.appendChild(document.createElement("br"));
        appearance.append(x["first-appearance"]);

        card.appendChild(appearance);

        const description = document.createElement("p");
        description.classList.add("fact");
        description.textContent = x.fact;

        card.appendChild(description);

        showHere.appendChild(card);
    });
}





getVillains();