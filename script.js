const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionsContainer = document.getElementById("questions");
const questionText = document.getElementById("question-words");
const optionsContainer = document.getElementById("options");
const endScreen = document.getElementById("quiz-end");
const scoreDisplay = document.getElementById("score-final");
const nameInput = document.getElementById("initials");
const submitButton = document.getElementById("submit-score");

var questionsarryay =[

    {
        question: "Question: Which method adds a new item to the end of an array and returns the new length?",
        imageSrc: "",
        answerChoice: ["A) shift()", "B) return() ", "C) push() ", "D) pop()"],
        correctAnswer: 2
    }, 
    
    {
        question: "Question: What is the HTML tag under which you can write the JavaScript code?",
        imageSrc: "",
        answerChoice: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
        correctAnswer: 2
    }, 
    
    {
        question: "Question: Which of the following can't be done with client-side JavaScript?",
        imageSrc: "",
        answerChoice: ["A) Sending a form's contents by email", "B) Validating a form", "C) Storing the form's contents to a database file on the server", "D) None of the above"],
        correctAnswer: 2
    },
    
    {
        question: "Question: What are variables used for in JavaScript Programs?",
        imageSrc: "",
        answerChoice: ["A) Storing numbers, dates, or other values", "B) Varying randomly", "D) Causing high-school algebra flashbacks", "D) None of the above"],
        correctAnswer: 0
    },
    
    {
        question: "Question: Which of the following are capabilities of functions in JavaScript?",
        answerChoice: ["A) Return a value", "B) Accept parameters", "C) Accept parameters and Return a value", "D) All of the above"],
        correctAnswer: 1
    }];
    
    function setQuizQuestions() {
        questionHeading.textContent = questionsArray[i].question;
        answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
        };
    
        
    
    
    



