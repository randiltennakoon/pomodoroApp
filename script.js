const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

var timer = setInterval(updateCountdown, 1000);


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time --;

    if(minutes == 0 && seconds == '0' + 0) {
        console.log(minutes, seconds);
        clearInterval(timer);
        console.log("Done");

        countdownEl.innerHTML = `${minutes}: ${seconds}`+ "\n Time's Up";
    }

}