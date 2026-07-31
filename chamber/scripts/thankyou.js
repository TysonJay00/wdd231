const getString = window.location.search;
const info = new URLSearchParams(getString);

const timestamp = new Date();

document.querySelector("#results").innerHTML = `
    <p>Your Name: ${info.get("first")} ${info.get("last")}</p>
    <p>Your Phone: ${info.get("phone")}</p>
    <p>Your Email: ${info.get("email")}</p>
    <p>Your Business/Organization: ${info.get("organization")}</p>
    <p>Membership Level: ${info.get("Membership")}</p>
    <p>Submitted: ${timestamp.toLocaleString()}</p>
`;
