/*

start screen - onclick start button*/
$(document).ready(function () {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var timer = 10;
    var intervalId;

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
            question: "How much larger is the Sun than Earth?",
            answers: ["750 times", "5,000 times", "300,000 times"],
            correctAnswer: "300,000 times"
        },
        {
            question: "How many moons does Jupiter have?",
            answers: ["79", "8", "26"],
            correctAnswer: "79"
        },
        {
            question: "What is a shooting star?",
            answers: ["comet", "meteor", "asteroid"],
            correctAnswer: "meteor"
        },
        {
            question: "How many planets in our solar system have rings?",
            answers: ["1", "2", "4"],
            correctAnswer: "4"
        },

    ]

    function gameStart() {
        $("#gameBoard").hide();
        $("#scoreScreen").hide();
        console.log("gameStart running");
    };

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timer--;
        $("#countdown").html("Time remaining: " + timer);
        if (timer === 0) {
            $("#gameBoard").remove();
            $("#scoreScreen").show();

        }
    }
   

    // removes start button onclick and displays question screen

    gameStart();

    $("#startButton").click(function () {
        $("#startScreen").hide();
        $("#gameBoard").show();
        run();
        decrement();
        console.log("start button click running");


        //inserts questions & answers into HTML
        $("#question1").text(questions[0].question);
        $("label[for=ans1A]").html(questions[0].answers[0]);
        $("label[for=ans1B]").html(questions[0].answers[1]);
        $("label[for=ans1C]").html(questions[0].answers[2]);

        $("#question2").text(questions[1].question);
        $("label[for=ans2A]").html(questions[1].answers[0]);
        $("label[for=ans2B]").html(questions[1].answers[1]);
        $("label[for=ans2C]").html(questions[1].answers[2]);

        $("#question3").text(questions[2].question);
        $("label[for=ans3A]").html(questions[2].answers[0]);
        $("label[for=ans3B]").html(questions[2].answers[1]);
        $("label[for=ans3C]").html(questions[2].answers[2]);

        $("#question4").text(questions[3].question);
        $("label[for=ans4A]").html(questions[3].answers[0]);
        $("label[for=ans4B]").html(questions[3].answers[1]);
        $("label[for=ans4C]").html(questions[3].answers[2]);

        $("#question5").text(questions[4].question);
        $("label[for=ans5A]").html(questions[4].answers[0]);
        $("label[for=ans5B]").html(questions[4].answers[1]);
        $("label[for=ans5C]").html(questions[4].answers[2]);

        $("#question6").text(questions[5].question);
        $("label[for=ans6A]").html(questions[5].answers[0]);
        $("label[for=ans6B]").html(questions[5].answers[1]);
        $("label[for=ans6C]").html(questions[5].answers[2]);

        $("#question7").text(questions[6].question);
        $("label[for=ans7A]").html(questions[6].answers[0]);
        $("label[for=ans7B]").html(questions[6].answers[1]);
        $("label[for=ans7C]").html(questions[6].answers[2]);

        $("#question8").text(questions[7].question);
        $("label[for=ans8A]").html(questions[7].answers[0]);
        $("label[for=ans8B]").html(questions[7].answers[1]);
        $("label[for=ans8C]").html(questions[7].answers[2]);

    });

    // clears question screen takes user to scoring screen
    $("#doneButton").click(function () {
        $("#gameBoard").remove();
        $("#scoreScreen").show();
        // $("#startButton").show();
    });




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