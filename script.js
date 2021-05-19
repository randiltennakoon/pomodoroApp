const startingMinutes = 10;  //10
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
const countdownCompleted = document.getElementById('completed');

var timer = setInterval(updateCountdown, 1000);


function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    if(minutes < 10){
        minutes = '0' + minutes;
    }

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time --;

    if(minutes == '0' + 0 && seconds == '0' + 0) {
        console.log(minutes, seconds);
        clearInterval(timer);
        countdownCompleted.innerHTML = "Time's Up";
        console.log("Done");

        countdownEl.innerHTML = `${minutes}:${seconds}`;
    }

}