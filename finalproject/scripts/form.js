const getString = window.location.search;
const info = new URLSearchParams(getString);

const results = document.querySelector("#results");

if (results) {

    results.innerHTML = `
        <p>Your Name: ${info.get("name")}</p>
        <p>Your Favourite Batman Villain: ${info.get("character")}</p>
        <p>Your Comments: ${info.get("comments")}</p>
        
    `;
}

