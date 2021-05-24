//const startingMinutes = 1;  //10

// globale variables
// var timer;  // variable for countdown-time loop
var userGuideMsg;
var buttonText;
//window.updateCountdown = function() {};
// var pause = false;



// display user input as he/she writes
var inputBox = document.getElementById('userInputMinutes');
inputBox.onkeyup = function(){
    document.getElementById('countdown_div').innerHTML = "Your time is set to: <h2>" +inputBox.value + " minutes</h2>";
    $("#startBtnMsg").show();
}



function startTimer() {
    //$("#completed").hide();
    $('#countdown_div').show();
    $('#countdown').show();


    // validate user input
    var x = document.getElementById('userInputMinutes').value;
    if(x == ""){
        alert("Minutes cannot be empty !");
        //$('#validate_error').show();
        return false;
    }else if(isNaN(x)){
        alert("You should enter a number for Minutes...");
        return false;
    }else if(!(x >= 1) || !(x <= 120)){
        alert("Number must be in between 1 and 120");
        return false;
    }


    
    // validate whether the user input is non-empty && a number
    // var x = document.getElementById('userInputMinutes').value;
    // if (x == "" || isNaN(x)) {
    //     alert("Minutes cannot be empty & must be a number !");
    //     $("#startBtnMsg").hide();
    //     return false;

    // }

    // // validate whether the user input is in between 1 & 120
    // if(!(x >= 1) || !(x <= 120)){
    //     alert("number must be in between 1 and 120");
    //     $("#startBtnMsg").hide();
    //     return false;
    // }


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

        // check whether the timer has completed
        if(minutes == '0' + 0 && seconds == '0' + 0) {
            console.log(minutes, seconds);
            clearInterval(timer);

            userGuideMsg = document.getElementById('completed');
            userGuideMsg.innerHTML = "time's up";

            //console.log(userGuideMsg);
            //$("#completed").show();
            console.log("timer completed");

            countdownEl.innerHTML = `${minutes}:${seconds}`;
            
            $("#instructionBtnMsg").hide();
            $(".pauseBtn").hide();
            $(".resetBtn").hide();
            $('input[type="text"]').val('');
            //$(".startBtn").attr("disabled", false)
            $(".startBtn").hide();
            $(".startNewTaskBtn").show();
            $('#countdown').hide();

            // $(document).ready(function() {
            //     $(".startNewTaskBtn").click(function() {
            //         $("#userSetMinutues").show();
            //         $(".startBtn").show();
            //         $('#completed').hide();
            //         //$(".startBtn").attr("disabled", false)
            //         $(".startNewTaskBtn").hide();

            //         userGuideMsg = document.getElementById('completed');
            //         userGuideMsg.innerHTML = "";
                    
            //     });
            // });  
        }

    }

    $('.resumeBtn').click(function() {

        $("#instructionBtnMsg").show();
        $("#pauseBtnMsg").hide();


        $('.pauseBtn').show();
        $('.resumeBtn').hide();
        $('.resetBtn').show();
    
        userGuideMsg = document.getElementById('completed');
        userGuideMsg.innerHTML = "";
        timer = setInterval(updateCountdown, 1000); 
        console.log("timer resumed"); 

    });


    $("#startBtnMsg").hide();
    $("#instructionBtnMsg").show();
    $("#resetBtnMsg").hide();


    // $(".startNewTaskBtn").click(function() {
    //     $("#userSetMinutues").show();
    //     $(".startBtn").show();
    //     $('#countdown').hide();
    //     $(".startNewTaskBtn").hide();
    //     $('#countdown_div').hide();
    
    //     userGuideMsg = document.getElementById('completed');
    //     userGuideMsg.innerHTML = "";
    
    //     clearInterval(timer);
    //     timer = setInterval(updateCountdown, 1000); 
    
        
    
    // });



}




//jQuery part

// start button
$(document).ready(function(){
    $(".startBtn").click(function(){
        $(".startBtn").hide();
        //$(".startBtn").attr("disabled", true);
        $("#userSetMinutues").hide();     // hiding user input
        $(".pauseBtn").show();  // enable pause/resume button
        $(".resetBtn").show();    // enable reset button
    });
});


$(".startNewTaskBtn").click(function() {
    $("#userSetMinutues").show();
    $(".startBtn").show();
    $('#countdown').hide();
    $(".startNewTaskBtn").hide();
    $('#countdown_div').hide();

    userGuideMsg = document.getElementById('completed');
    userGuideMsg.innerHTML = "";

    // clearInterval(timer);
    // timer = setInterval(updateCountdown, 1000); 
  

});

// - - - - - - - - - - -- 


// pause/resume button
// $('.pauseBtn').click(function() {
//     //clearInterval(timer);
//     $("#instructionBtnMsg").hide();
//     $("#pauseBtnMsg").show();
    
//     userGuideMsg = document.getElementById('completed');

//     buttonText = ($(this).text() == 'RESUME') ? 'PAUSE':'RESUME';
//     $(this).text(buttonText);

//     //buttonText = ($(this).text() == 'RESUME') //false - PAUSE
//     console.log(buttonText);
    
//     if(buttonText == 'PAUSE') {
//         $("#instructionBtnMsg").show();
//         $("#pauseBtnMsg").hide();
//         userGuideMsg.innerHTML = "";
//         console.log("timer resumed");
//     }else {
//         userGuideMsg.innerHTML = "timer paused";
//         clearInterval(timer);
//         console.log("timer paused");    
//     }

// });

$('.pauseBtn').click(function() {

    $("#instructionBtnMsg").hide();
    $("#pauseBtnMsg").show();
    $(".pauseBtn").hide();
    $(".resumeBtn").show();
    $('.resetBtn').hide();

    userGuideMsg = document.getElementById('completed');
    userGuideMsg.innerHTML = "timer paused";
    clearInterval(timer);
    console.log("timer paused"); 

});


// - - - -  - - --  - - --  -


// reset button
$('.resetBtn').click(function() {
    clearInterval(timer);
    $("#userSetMinutues").show();
    $("#instructionBtnMsg").hide();
    $("#pauseBtnMsg").hide();
    $("#resetBtnMsg").show();
    $('#countdown').hide();

    //$(".startBtn").attr("disabled", false);
    $('.startBtn').show();
    
    $(".resetBtn").hide();
    $(".pauseBtn").hide();
    $(".resumeBtn").hide();
    userGuideMsg = document.getElementById('completed');
    userGuideMsg.innerHTML = "";

    countdownEl.innerHTML = '';
    console.log("Timer Reset");

    // $("#userSetMinutues").show();
    $('input[type="text"]').val('');
    $('#countdown_div').hide();


});



  
    

    

    









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

// var $this = $(this);
// $this.toggleClass('startBtn');
// if($this.hasClass('startBtn')){
//     $this.text('START');			
// } else {
//     $this.text('START A NEW TASK');
// }


// $(document).ready(function(){
//     $(".resetBtn").click(function(){
//       //$("#userSetMinutues").show();
//       //$('input[type="text"]').val('');
//     });
// });  


// var $this = $(this);
    // $this.toggleClass('pauseBtn');
    // if($this.hasClass('pauseBtn')){
    //     $this.text('PAUSE');
    //     userGuideMsg.innerHTML = "";
    //     console.log("timer resumed");			
    // } else {
    //     $this.text('RESUME');
    //     userGuideMsg.innerHTML = "timer paused";
    //     console.log("timer paused"); 
    // } 

    
    
    
    // $(document).ready(function() {      // STILL NEEDS TO BE FIXED
    //     $('.pauseBtn').click(function(){
            // console.log('pause button clicked');
            // $(this).text(function(i, text){
            //     //return text === "PAUSE" ? "RESUME" : "PAUSE";
            //     $this.text('PAUSE');
            // });
    //     });
    // });