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
