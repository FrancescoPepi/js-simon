// richiamo DOC
const secondsBox = document.getElementById("seconds");
const minutesBox = document.getElementById("minutes");
const hoursBox = document.getElementById("hours");

let tomorrowDate = new Date("2023-08-24 9:30").getTime();
let countDown = setInterval(function () {
  let nowDate = new Date().getTime();
  let distance = tomorrowDate - nowDate;
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  seconds < 10
    ? (secondsBox.innerText = "0" + seconds)
    : (secondsBox.innerText = seconds);

  minutes < 10
    ? (minutesBox.innerText = "0" + minutes)
    : (minutesBox.innerText = minutes);

  hours < 10
    ? (hoursBox.innerText = "0" + hours)
    : (hoursBox.innerText = hours);

  if (distance < 0) {
    clearInterval(countDown);
  }
}, 1000);
