const directory = document.getElementById("directory");
const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");

fetch("data/members.json")
    .then(response => response.json())
    .then(companies => {

        companies.forEach(company => {
            const card = document.createElement("section");
            card.classList.add("card");

            card.innerHTML = `
            <h2>${company.companyname}</h2>
            <p class="tagline">${company.otherinfo}</p>
            
            <div class="card-info"></div>

            <img
                src="${company.image}" 
                alt="${company.companyname} logo" 
                width="90"
                height="90"
                loading="lazy">

            <div class="details">
               <p><strong>PHONE:</strong> ${company.phonenumber}</p>
               <p><strong>ADDRESS:</strong> ${company.address}</p>
               <p><strong>URL:</strong>${company.websiteurl}</p>
            </div>
            `;







            directory.appendChild(card);
        })
    })

gridButton.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
})

listButton.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
})