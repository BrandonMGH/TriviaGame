
$(document).ready(function() {

var countdown = 45;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;


 

$("button").on("click", function () {
    $(".Html1").html(""); // removes click button text after button is pressed
    $("button").replaceWith(""); //replaces button with HTML question content after button is clicked
    
    var questionOption = 
        {
            question1: "<h5> Question 1:  What is your name?  </h5>",
            question2: "<h5> Question 2:  What is your quest?</h5>",
            question3: "<h5> Question 3:  What is your favorite color? </h5>",
            question4: "<h5> Question 4:  What is the air speed velocity of a unladen swallow? </h5>",
            question5: "<h5> Question 5:  African or European Swallow?  Hmmm...never thought of that before</h5>",
        }
        
            

    var inputs = [
        input1 =  {
            answer1:"<label><input type=radio name=radio value=incorrect> What? </label>",
            answer2:"<label><input type=radio name=radio value=incorrect> Ummmm.... </label>",
            answer3:"<label><input type=radio name=radio value=correct> Arthur of Camelot </label>",
          
        },
        input2 =  {
            answer1:"<label><input type=radio name=radio value=incorrect> Still trying to understand the first question </label>",
            answer2:"<label><input type=radio name=radio value=correct> To find the Holy Grail </label>",
            answer3:"<label><input type=radio name=radio value=incorrect> To get away from this conversation </label>",
           
        },
        input3 =  {
            answer1:"<label><input type=radio name=radio value=incorrect> Blue...no wait...Yellow! </label>",
            answer2:"<label><input type=radio name=radio value=correct> Blue..definitely Blue </label>",
            answer3:"<label><input type=radio name=radio value=incorrect> I don't like to pick favorites</label>",
          
        },
        input4 =  {
            answer1:"<label><input type=radio name=radio value=incorrect> What in the great wide tundra of Syberia kind of question is that?  </label>",
            answer2:"<label><input type=radio name=radio value=incorrect> I + have = no clue </label>",
            answer3:"<label><input type=radio name=radio value=correct> African or European Swallow? </label>",
           
        },
        input5 =  {
            answer1:"<label><input type=radio name=radio value=correct> I think we're done here </label>",
            
        },
    ]
    var questionContainer = [questionOption.question1, questionOption.question2, questionOption.question3, questionOption.question4, questionOption.question5];

    var answerContainerOne = [inputs[0].answer1, inputs[0].answer2, inputs[0].answer3];
    var answerContainerTwo = [inputs[1].answer1, inputs[1].answer2, inputs[1].answer3];
    var answerContainerThree = [inputs[2].answer1, inputs[2].answer2, inputs[2].answer3];
    var answerContainerFour = [inputs[3].answer1, inputs[3].answer2, inputs[3].answer3];
    var answerContainerFive = [inputs[4].answer1,];



    for (var i = 0; i < 5; i++) {
        console.log(questionContainer[i]);
        $(".replace").append(questionContainer[i]);
        $(".replace").append("<div class=radioinput" + [i] + ">" + "</div>")// adds div elements to place the radio input elements in. 
    }



    for (var i = 0; i < 5; i++) {
        $(".radioinput0").append(answerContainerOne[i]); 
        $(".radioinput1").append(answerContainerTwo[i]); 
        $(".radioinput2").append(answerContainerThree[i]); 
        $(".radioinput3").append(answerContainerFour[i]); 
        $(".radioinput4").append(answerContainerFive[i]);  
    }

    // $('input[type=radio]').on('change', function(){//function assesses the option that were chosen by the user and determines an overall score
    //     var clickValCorrect = $('input[value=correct]').length; 
    //     var clickValIncorrect= $('input[value=incorrect]:checked').length;
    //     console.log(clickValCorrect);
    //     console.log(clickValIncorrect)
      
    $(function () {
        $('input[name="radio"]').on('click', function() {
            if ($(this).val() == 'correct') {
                correctAnswers++;
        
            } else if ($(this).val() == 'incorrect') {
                incorrectAnswers++;  
            }
        })
        });
        
        
    //     // if() $('input[value=correct]:checked').length; 
    //     // console.log(correctAnswers);
    //     // incorrectAnswers = $('input[value=incorrect]:checked').length;
    //     // console.log(incorrectAnswers);
    //     // unansweredQuestions = (8-(correctAnswers+incorrectAnswers));
        // });


        // //Get
        // var bla = $('#txt_name').val();

        // //Set
        // $('#txt_name').val(bla);
    
        
   
    event.preventDefault();  // prevents button from refreshing the page when clicked. 
    start();
});



function replacetext(){  // replaces the title, question and input text in favor of the end of game text
    if (correctAnswers > incorrectAnswers){
    $('#game').replaceWith("<h2>Congratulatons.  You made it past the bridge!</h2>");
    } else if (correctAnswers < incorrectAnswers){
    $('#game').replaceWith("<h2>You have failed and fallen to a grissly death!</h2>"); 
    } else {
    $('#game').replaceWith("<h2>You have failed and fallen to a grissly death!</h2>"); 
    }
    

}


function start() {

    clearInterval(intervalId);
    intervalId = setInterval(onload, 1000);
    
}


function onload() {

    countdown--;

    $("#CDTimer").html("<p>Time Remaining: </P>" + countdown + " seconds")
    
    if (countdown === 0) {
       
        stop(); 
    }

}



function stop() {

    clearInterval(intervalId);
    replacetext (); 
}


});
