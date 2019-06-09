let questionCounter =0;
let score =0;

let questionsArray = [
    {
      question: "1. You work on a Javascript project. How do you prompt users with messages and at the same time requesting user inputs?",
       optionone: "Alert()",
      optiontwo: "Display()",
      optionthree: "Prompt()",
      optionfour: "Confirm()",
      correctAnswer: "Prompt()"
    },
    {
       question: "2. Which of the following function of Array object reverses the order of the elements of an array?",
      optionone: "reverse()",
      optiontwo: "push()",
      optionthree: "reduceRight()",
      optionfour: "reduce()",
      correctAnswer: "reverse()"
    
    },
    {
       question: "3. What statement supplies the value of a function?",
      optionone: "continue",
      optiontwo: "return",
      optionthree: "cancel",
      optionfour: "valueOf",
      correctAnswer: "return"
      
    },
    {
      question: "4. How do you find the number with the highest value of x and y?",
      optionone: "Math.max(x, y)",
      optiontwo: "top(x, y)",
      optionthree: "ceil(x, y)",
      optionfour: "Math.ceil(x, y)",
      correctAnswer: "Math.max(x, y)"
    },
    {
      question: "5. Inside which HTML element do we put the JavaScript?",
      optionone: "<javascript>",
      optiontwo: "<js>",
      optionthree: " <scripting>",
      optionfour: "<script>",
      correctAnswer: "<script>"
    },
    {
      question: "6. How does a FOR loop start?",
      optionone: "for (i = 0; i <= 5)",
      optiontwo: "for (i = 0; i <= 5; i++)",
      optionthree: "for i = 1 to 5",
      optionfour: "for (i <= 5; i++)",
      correctAnswer: "for (i = 0; i <= 5; i++)"
    },
     {
      question: "7. How do you create a function in JavaScript?",
      optionone: "function = myFunction()",
      optiontwo: "function:myFunction()",
      optionthree: "function myFunction()",
      optionfour: "function - myFunction()",
      correctAnswer: "function myFunction()"
    },
    {
      question: "8. How to write an IF statement in JavaScript?",
      optionone: "if i = 5",
      optiontwo: "if i == 5 then",
      optionthree: "if i = 5 then",
      optionfour: "if (i == 5)",
      correctAnswer: "if (i == 5)"
    }
    ];
  
  let questionsCount = questionsArray.length;
  
  function handleStartClick(){
    $('.start-section').hide();
    $('.main').show();
     renderQuizBox();
 
  }

 function renderQuizBox(){
    renderQuestion(); 
    renderQuestionCount();
 }

 function renderQuestionCount(){
    $(".question-count").text(`Question ${questionCounter+1} of ${questionsCount}`);

 }

 function renderQuestion (){
    $(".questions-form p").text(questionsArray[questionCounter].question);
    $(" #option-one ").val(questionsArray[questionCounter].optionone);
    $(" #option-two").val(questionsArray[questionCounter].optiontwo);
    $(" #option-three").val(questionsArray[questionCounter].optionthree);
    $(" #option-four").val(questionsArray[questionCounter].optionfour);

    $(" #option-one").next().text(questionsArray[questionCounter].optionone);
    $(" #option-two").next().text(questionsArray[questionCounter].optiontwo);
    $(" #option-three").next().text(questionsArray[questionCounter].optionthree);
    $(" #option-four").next().text(questionsArray[questionCounter].optionfour);
 }

function handleSubmitAnswer(){
    let rightAnswer = questionsArray[questionCounter].correctAnswer;
    let selectedOption = $('input[type=radio]:checked').val();
  
    if(selectedOption === rightAnswer)
      score++;
        questionCounter++;
      if(questionCounter < questionsCount) {
         renderQuizBox();
      }
     else{
        $('.row').hide();
        $('.score').text(`your score is ${score}/${questionsCount}`);
        $('.bhaiya').show();

    }
   
 }

function hide_Quiz(){
    $('.main').hide();
    $('.bhaiya').hide();
   
}