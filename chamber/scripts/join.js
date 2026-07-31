

const modal = document.querySelector("#membershipModal")
const title = document.querySelector('#modalTitle')
const content = document.querySelector('#modalContent')
const closeBtn = document.querySelector('#closeModal')




closeBtn.addEventListener('click', () => modal.close())

const membershipInfo = {
    nonprofit: {
        title: "Non Profit Membership",
        benefits: [
            "A Plaque with the Mayor's stamp of Approval",
            "Participation in any local Parades"
        ],

        cost: "Free"

    },

    bronze: {
        title: "bronze Membership",
        benefits: [
            "A Bronze Plaque with the Mayor's stamp of Approval",
            "Participation in any local Parades",
            "Basic Access to fundraisers and Charities",

        ],
        cost: "$20"

    },

    silver: {
        title: "Silver Membership",
        benefits: [
            "A Silver Plaque with the Mayor's stamp of Approval",
            "Participation in any local Parades",
            "advanced Access to fundraisers and Charities",
            "Discounted Advertising across the city"
        ],

        cost: "$50"
    },

    gold: {
        title: "Gold Membership",
        benefits: [
            "A Gold Plaque with the Mayor's stamp of Approval",
            "Participation in any local Parades",
            "Host fundraisers and Charities for your benefit",
            "Discounted Advertising across the city plus extra discounts around the city",

        ],
        cost: "$80"
    },
};

function showMembership(level) {
    const info = membershipInfo[level];

    title.textContent = info.title;

    content.innerHTML = `
    <ul>
    ${info.benefits.map(item => `<li>${item}</li>`).join("")}
    </ul >
    <p><strong>Cost:</strong> ${info.cost}</p>
   `;

    modal.showModal();
}

document.querySelectorAll(".info-btn").forEach(button => {
    button.addEventListener("click", () => {
        const level = button.dataset.level;
        showMembership(level);
    });
});







