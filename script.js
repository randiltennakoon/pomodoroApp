//const startingMinutes = 1;  //10

    // $("#startBtnMsg").hide();
    // $("#instructionBtn").show();
    // $("#pauseResumeBtnMsg").hide();
    // $("#resetBtnMsg").hide();


// globale variables
// var timer;  // variable for countdown-time loop
var userGuideMsg;


// display user input as he/she writes
var inputBox = document.getElementById('userInputMinutes');
inputBox.onkeyup = function(){
    document.getElementById('countdown_div').innerHTML = "Your time is set to: <h2>" +inputBox.value + " minutes</h2>";
    $("#startBtnMsg").show();
}



function startTimer() {
    //$("#completed").hide();
    $('#countdown_div').show();
    
    // validate whether the user input is non-empty && a number
    window.x = document.getElementById('userInputMinutes').value;
    if (x == "" || isNaN(x)) {
        alert("Minutes cannot be empty & must be a number !");
        return false;
    }


    // getting user input minutes
    var getUserInput = document.getElementById("userInputMinutes");
    const startingMinutes = getUserInput.value;
    
        console.log(startingMinutes);   // print user input to the console


    // assigning user set Minutes to 'time' local variable
    let time = startingMinutes * 60;

    window.countdownEl = document.getElementById('countdown'); // added window. to make the variable global
    //const countdownCompleted = document.getElementById('completed'); - no need


    // run 'updateCountdown' function at every 1 sec
    window.timer = setInterval(updateCountdown, 1000); 



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

            userGuideMsg = document.getElementById('completed');
            userGuideMsg.innerHTML = "time's up";

            console.log(userGuideMsg);
            //$("#completed").show();
            console.log("Done");

            countdownEl.innerHTML = `${minutes}:${seconds}`;

            $("#instructionBtnMsg").hide();
            $("#userSetMinutues").show();
            $(".pauseResumeBtn").hide();
            $(".resetBtn").hide();
            $('input[type="text"]').val('');
            $(".startBtn").attr("disabled", false)
        }

    }

    //$(".startBtn").hide();
    $("#startBtnMsg").hide();
    $("#instructionBtnMsg").show();
    // $("#pauseResumeBtnMsg").hide();
    $("#resetBtnMsg").hide();


    // pause the timer
    

   


}



//jQuery part
$(document).ready(function(){
    $(".startBtn").click(function(){
        //$(".startBtn").hide();
        $(".startBtn").attr("disabled", true);
        $("#userSetMinutues").hide();     // hiding user input
        $(".pauseResumeBtn").show();  // enable pause/resume button
        $(".resetBtn").show();    // enable reset button
    });
});

// - - - - - - - - - - -- 

// pause/resume button
$('.pauseResumeBtn').click(function() {
    clearInterval(timer);
    $("#instructionBtnMsg").hide();
    $("#pauseResumeBtnMsg").show();
    console.log("Timer Paused");
});


// $(document).ready(function() {      // STILL NEEDS TO BE FIXED
//     $('.pauseResumeBtn').click(function(){
//         console.log('pause button clicked');
//         $(this).text(function(i, text){
//             return text === "PAUSE" ? "RESUME" : "PAUSE";
//         });
//     });
// });

// - - - -  - - --  - - --  -

// reset button
$('.resetBtn').click(function() {
    clearInterval(timer);
    $("#userSetMinutues").show();
    $("#instructionBtnMsg").hide();
    $("#pauseResumeBtnMsg").hide();
    $("#resetBtnMsg").show();
    //$(".startBtn").show();

    $(".startBtn").attr("disabled", false);
    $(".pauseResumeBtn").hide();
    $(".resetBtn").hide();
    userGuideMsg = document.getElementById('completed');
    userGuideMsg.innerHTML = "";
    
    

    // var pausedMin = Math.floor((startingMinutes * 60) / 60); 
    // var pausedMin = Math.floor(time / 60);
    // var pausedSec = time % 60;

    // console.log(pausedMin, pausedSec);

    // pausedSec = pausedSec < 10 ? '0' + pausedSec : pausedSec;
    // if(pausedMin < 10){
    //     pausedMin = '0' + pausedMin;
    // }
    // countdownEl.innerHTML = `${pausedMin}:${pausedSec}`;

    countdownEl.innerHTML = '00:00';
    console.log("Timer Reset");

    // $("#userSetMinutues").show();
    $('input[type="text"]').val('');

    $('#countdown_div').hide();


    // x = "";
    // console.log(x);
    // if(x == "") {
    //     console.log(x);
    //     $('#countdown_div').hide();
    // }else {
    //     $('#countdown_div').show();
    // }
});

// $(document).ready(function(){
//     $(".resetBtn").click(function(){
//       //$("#userSetMinutues").show();
//       //$('input[type="text"]').val('');
//     });
// });  

  
    

    

    









//other

// function pauseReset() {
//     console.log('pause btn clicked');
//     var x = document.getElementById('pauseResume');
//     if(x.innerHTML === "PAUSE") {
//         x.innerHTML = "RESUME";
//     }else {
//         x.innerHTML = "PAUSE";
//     }
// }