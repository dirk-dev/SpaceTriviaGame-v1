/*

start screen - onclick start button*/
$(document).ready(function () {

    var correctGuess = 0;
    var wrongGuess = 0;

    var questions = [{
            question: "What constellation is also known as the Seven Sisters?",
            answers: ["Big Dipper", "Pleiades", "Cassiopeia"],
            correctAnswer: "Pleiades"
        },
        {
            question: "What is the distance from the Earth to the Sun?",
            answers: ["93 million miles", "1 light year", "500,000 miles"],
            correctAnswer: "93 million miles"
        },
        {
            question: "What is the largest known star?",
            answers: ["Sirius", "Betelgeuse", "VY Canis Majoris"],
            correctAnswer: "VY Canis Majoris"
        },
        {
            question: "What is the closest star to Earth?",
            answers: ["Alpha Centauri", "Proxima Centauri", "Barnard's Star"],
            correctAnswer: "Proxima Centauri"
        },
        {
            question: "What is the closest star to Earth?",
            answers: ["Alpha Centauri", "Proxima Centauri", "Barnard's Star"],
            correctAnswer: "Proxima Centauri"
        },
        {
            question: "How many moons does Jupiter have?",
            answers: ["79", "8", "14"],
            correctAnswer: "79"
        },
        {
            question: "What is a shooting star?",
            answers: ["comet", "meteor", "asteroid"],
            correctAnswer: "meteor"
        },
        {
            question: "How many planets in our solar system have rings?",
            answers: ["one", "2", "4"],
            correctAnswer: "4"
        },

    ]
    // removes start button onclick
    $("button").click(function () {
        $("#button1Div").remove();

    });

    //inserts question 1 into the HTML
    $("#question1").text(questions[0].question);
    $("#answer1A").text(questions[0].answers[0]);




});
/* when button clicked, go to questions page
start timer
decrement timer
log each user selection

if/else for validating answers

@ timer = 0, disallow any more input
hide question screen - jQuery .show/.hide
display screen with win/loss totals

[possible options - restart game?

    USe JS for logic, JQuery to manipulate HTML

    Don"t forget to write a readme!!!

    
*/
console.log("app.js active");