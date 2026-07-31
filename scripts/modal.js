const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");

const courseDetails = document.querySelector("#courseDetails");
const courseDetailsText = document.querySelector("#courseDetails div");
const closeButton = document.querySelector("#closeButton");

// "show the details" button opens the details modally 
openButton1.addEventListener("click", () => {
    courseDetailsText.innerHTML = "An Apple has 95 calories"
    courseDetails.showModal();
});

openButton2.addEventListener("click", () => {
    courseDetailsText.innerHTML = "An Orange has 45 calories"
    courseDetails.showModal();
});

openButton3.addEventListener("click", () => {
    courseDetailsText.innerHTML = "A Banana has 105 calories"
    courseDetails.showModal();
});

// "close" button closes the dialog
closeButton.addEventListener("click", () => {
    courseDetails.close();
})