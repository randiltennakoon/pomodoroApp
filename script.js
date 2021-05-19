//const startingMinutes = 1;  //10

var inputBox = document.getElementById('userInputMinutes');

inputBox.onkeyup = function(){
    document.getElementById('countdown_div').innerHTML = "Your time is set to: <h2>" +inputBox.value + " minutes</h2>";
    $("#startBtnMsg").show();
}


function startTimer() {

    $("#startBtnMsg").hide();
    $("#instructionBtn").show();
    $("#pauseBtnMsg").hide();
    $("#resetBtnMsg").hide();



    // validate whether the input fiels is empty
    var x = document.getElementById('userInputMinutes').value;
    if (x == "") {
        alert("Minutes cannot be empty !");
        return false;
    }

    // getting user input minutes
    var getUserInput = document.getElementById("userInputMinutes");
    const startingMinutes = getUserInput.value;

    // print user input to the console
    console.log(startingMinutes);


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

    $('.pauseBtn').click(function() {
        clearInterval(timer);
        $("#instructionBtn").hide();
        $("#pauseBtnMsg").show();
        console.log("Timer Paused");
    });


    $('.resetBtn').click(function() {
        clearInterval(timer);
        $("#userSetMinutues").show();
        $("#instructionBtn").hide();
        $("#pauseBtnMsg").hide();
        $("#resetBtnMsg").show();

        var pausedMin = Math.floor((startingMinutes * 60) / 60); 
        var pausedSec =(startingMinutes * 60) % 60;

        console.log(pausedMin, pausedSec);

        pausedSec = pausedSec < 10 ? '0' + pausedSec : pausedSec;
        if(pausedMin < 10){
            pausedMin = '0' + pausedMin;
        }
        countdownEl.innerHTML = `${pausedMin}:${pausedSec}`;
        console.log("Timer Reset");
    });

}


}

$(document).ready(function(){
    $(".startBtn").click(function(){
      $("#userSetMinutues").hide();
    });
});

// $(document).ready(function(){
//     $(".resetBtn").click(function(){
//       //$("#userSetMinutues").show();
//       //$('input[type="text"]').val('');
//     });
// });


