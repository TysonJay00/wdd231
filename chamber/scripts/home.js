fetch("data/members.json")
    .then(response => response.json())
    .then(companies => {

        const qualifiedCompanies = companies.filter(company =>
            company.membershiplevel === "Gold" ||
            company.membershiplevel === "Silver"
        );
        /* select business randomly */
        const randomSpotlights = shuffle(qualifiedCompanies).slice(0, 3);

        randomSpotlights.forEach(company => {
            const card = document.createElement("section");
            card.classList.add("card");

            card.innerHTML = `
            <h2>${company.companyname}</h2>
            <p class="tagline">${company.otherinfo}</p>
            <p class="membership">Membership: ${company.membershiplevel}</p>
            
            <div class="card-info">
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
            </div>
            `;

            document.querySelector(".spotlights").appendChild(card);
        })
    })
/* shufflle the array */
function shuffle(array) {
    const shuffled = [...array];


    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;

}
