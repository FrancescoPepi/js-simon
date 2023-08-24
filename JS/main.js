// richiamo DOC
const secondsBox = document.getElementById("seconds");
const minutesBox = document.getElementById("minutes");
const hoursBox = document.getElementById("hours");
// data da ragiungere
let tomorrowDate = new Date("2023-08-24 9:30").getTime();

let secondsNumber = 1000;
let minutesNumber = secondsNumber * 60;
let HoursNumber = minutesNumber * 60;
let dayNumbers = HoursNumber * 24;
let countDown = setInterval(function () {
  calctimer();
}, 1000);

// funzione che che calcola i secondi,
const calctimer = () => {
  let nowDate = new Date().getTime();
  let distance = tomorrowDate - nowDate;

  if (distance < 0) {
    secondsBox.innerText = "00";
    minutesBox.innerText = "00";
    hoursBox.innerText = "00";
    clearInterval(countDown);
  }
  const seconds = Math.floor((distance % minutesNumber) / secondsNumber);
  const minutes = Math.floor((distance % HoursNumber) / minutesNumber);
  const hours = Math.floor((distance % dayNumbers) / HoursNumber);
  if (!distance < 0) {
    seconds < 10
      ? (secondsBox.innerText = "0" + seconds)
      : (secondsBox.innerText = seconds);

    minutes < 10
      ? (minutesBox.innerText = "0" + minutes)
      : (minutesBox.innerText = minutes);

    hours < 10
      ? (hoursBox.innerText = "0" + hours)
      : (hoursBox.innerText = hours);
  }
};
