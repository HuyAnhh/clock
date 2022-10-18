let Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const timeEle = document.querySelectorAll(".times")


setInterval(() => {
    const date = new Date;
    timeEle[0].innerText = Day[date.getDay()];
    timeEle[1].innerText = date.getHours();
    timeEle[2].innerText = date.getMinutes();
    timeEle[3].innerText = date.getSeconds();
}, 1000
) 

const btnChangeBg = document.querySelector(".btnChangeBackground");
const backgroundEle = document.querySelector(".flowerClock")
const hiddenEle = document.querySelector(".hidden")

const backgroundArr = [
    "Flower1.jpeg",
    "Flower2.jpeg",
    "Flower3.jpeg",
    "Flower4.jpeg",
    "Flower5.jpeg",
    "Flower6.jpeg",
    "Flower7.jpeg",
    "Flower8.jpeg",
]


btnChangeBg.addEventListener("click", () => {
    let randomBackground = Math.floor(Math.random() * 9)
    console.log(randomBackground)
    backgroundEle.style.backgroundImage = 'url('+backgroundArr[randomBackground]+')'
    hiddenEle.style.display = "none"

})

const btnSpecial = document.querySelector(".btnSpecial")

btnSpecial.addEventListener("click", () => {
    backgroundEle.style.backgroundImage = "none"
    hiddenEle.style.display = "block"
})