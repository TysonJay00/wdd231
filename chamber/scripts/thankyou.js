const getString = window.location.search;
const info = new URLSearchParams(getString);

const results = document.querySelector("#results");

if (results) {
    const timestamp = info.get("timestamp");

    results.innerHTML = `
        <p>Your Name: ${info.get("first")} ${info.get("last")}</p>
        <p>Your Phone: ${info.get("phone")}</p>
        <p>Your Email: ${info.get("email")}</p>
        <p>Your Business/Organization: ${info.get("organization")}</p>
        <p>Membership Level: ${info.get("membership")}</p>
        <p>Submitted: ${timestamp ? new Date(timestamp).toLocaleString() : "Not available"}</p>
    `;
}