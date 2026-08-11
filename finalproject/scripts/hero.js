import { robins } from '../data/robin.js'
// console.log(robin)

const showHere = document.querySelector("#showHere")
const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialogh2')
const myclose = document.querySelector('#mydialog button')
const myinfo = document.querySelector('#mydialog p')

myclose.addEventListener('click', () => mydialog.close())

function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = x.path
        photo.alt = x.name
        photo.width = 300;
        photo.height = 225;
        photo.loading = "lazy";

        photo.addEventListener('click', () => showStuff(x))
        showHere.append(photo)
    })
}

displayItems(robins)

function showStuff(x) {
    mytitle.textContent = x.name
    myinfo.textContent = x.description;
    mydialog.showModal()
}
