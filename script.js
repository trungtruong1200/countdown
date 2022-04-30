let days = document.querySelector('.days');
let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.second');

// let currentTime = new Date();
// console.log(currentTime);

let currentYear = new Date().getFullYear(); // lay ra thoi gian cua nam hien tai
console.log(currentYear);
let newYearTime = new Date(`Jan 01 ${currentYear + 1} 00:00:00`); // lay chuan time,vuot qua tieu chuan se stoped  + 1 them year
console.log(newYearTime);

function updateCountDown() {
    let currentTime = new Date(); 
    let diff = newYearTime - currentTime;
    // console.log(diff)
    
    //chia 1000 -> second / 60 -> minutes / 60 -> hour / 24 -> date
    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 / 60) % 24; //lay so du thoi gian con lai
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;
    
    // console.log(d , h , m, s);
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m ;
    seconds.innerHTML = s < 10 ? '0' + s : s; // neu nho hon 10 thi print 0 
}

setInterval(updateCountDown, 1000); // ham tu dong chay set milisecond 