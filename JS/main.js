// richiamo DOC
const secondsBox = document.getElementById("seconds");
const minutesBox = document.getElementById("minutes");
const hoursBox = document.getElementById("hours");
// data da ragiungere
let tomorrowDate = new Date("2023-08-24 11:20").getTime();

let secondsNumber = 1000;
let minutesNumber = secondsNumber * 60;
let HoursNumber = minutesNumber * 60;
let dayNumbers = HoursNumber * 24;
// creazione variabile per fermare il timer
let countDown;

// avvio funzione sia load sia ogni secondo
tick();
countDown = setInterval(tick, 1000);

// funzione che che calcola i secondi,
function tick() {
  let nowDate = new Date().getTime();
  let distance = tomorrowDate - nowDate;
  let [seconds, minutes, hours] = timerClock(distance);
  printClock(seconds, minutes, hours, distance);
}
function timerClock(distance) {
  if (distance < 0) {
    secondsBox.innerText = "00";
    minutesBox.innerText = "00";
    hoursBox.innerText = "00";
    if (countDown) clearInterval(countDown);
  }
  const seconds = Math.floor((distance % minutesNumber) / secondsNumber);
  const minutes = Math.floor((distance % HoursNumber) / minutesNumber);
  const hours = Math.floor((distance % dayNumbers) / HoursNumber);
  return [seconds, minutes, hours];
}

// funzione per printare l'orologio
function printClock(seconds, minutes, hours, distance) {
  if (distance > 0) {
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
}
