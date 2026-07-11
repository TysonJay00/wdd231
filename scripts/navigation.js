// Store the selected elelments that we are going to use.
const navbutton = document.querySelector("#ham-btn");
const navlinks = document.querySelector("#nav-bar");
//toggle the show class on and off

navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navBar.classList.toggle("show");
});


const navBar = document.querySelector("#nav-bar");