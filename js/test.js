var questionNumber = 0; // Which question am I on?
var max; // Question number
var correct = 0; // Correct answers
var incorrect = 0; // Incorrect answers
nextQuestion();

function nextQuestion() {
    // Go next question
   
}


$(document).ready(function() {
    

    function endGame() {
        $(".container").html(`
            </br></br>
            <p>Correct: ${correct}</br> Incorrect: ${incorrect}</br></br>END OF GAME</br>
            <input type='text' id='name' placeholder='Enter your name' required />
            <button id='submit-score'>Submit Score</button>
        `);


        $('#submit-score').click(function() {
            var name = $('#name').val();
            if (name) {
                saveScore(name, correct, incorrect);
                alert("Score submitted successfully!");
                window.location.href = 'scores.html';
            } else {
                alert("Please enter your name.");
            }
        });

    }

    function saveScore(name, correct, incorrect) {
        
    }


});
