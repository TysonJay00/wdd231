const results = document.querySelector("#results");

const params = new URLSearchParams(window.location.search);

const name = params.get("#name");
const character = params.get("character");
const comments = params.get("comments");

if (name && character && comments) {
    results.innerHTML = `
    <p>Thank you, <strong>${name}</strong>!
    </p>
    `
}