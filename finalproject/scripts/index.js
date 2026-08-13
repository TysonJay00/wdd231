const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}


const navbutton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

if (navbutton && navBar) {

    navbutton.addEventListener("click", () => {

        navbutton.classList.toggle("show");
        navBar.classList.toggle("show");

    });

}