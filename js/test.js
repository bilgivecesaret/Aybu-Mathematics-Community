var questionNumber = 0; // Which question am I on?
var max; // Question number
var correct = 0; // Correct answers
var incorrect = 0; // Incorrect answers
nextQuestion();

function nextQuestion() {
    // Go next question
    $.getJSON("data/questions.json", function(data) {
        max = data.questions.length;

        const question = data.questions[questionNumber];
        $('p[id=question]').text(question.question);
        for (let i = 0; i < 5; i++) {
            $(`#label${i+1}`).text(question.options[i]);
            if(question.answer === question.options[i]){
                $(`#radio${i+1}`).attr("value", "true");
            }else{
                $(`#radio${i+1}`).attr("value", "false");
            }            
        }
    });
   
}


$(document).ready(function() {
    $('input[name=answer]').click(function(event) {
        $('input[name=answer]').prop('disabled', true); // Disable other answers

        var labelFor = $(this).attr('id');
        setTimeout(async function() {
            if(event.target.value === "true") {
                $('label[for=' + labelFor + ']').attr("class", "correct"); // Make label green
                correct++;
            } else {
                $('label[for=' + labelFor + ']').attr("class", "incorrect"); // Make label red
                incorrect++;
            }
            questionNumber++;

            await new Promise(resolve => setTimeout(resolve, 1000));

            // Reset attributes of labels and radio buttons
            $('input[name=answer]').prop('checked', false);
            $('input[name=answer]').prop('disabled', false);
            if(questionNumber < max) {
                nextQuestion();
            } else {
                endGame();
            }
            $('label[for=' + labelFor + ']').removeClass("correct incorrect");
        }, 1000);
    });

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
        var scores = JSON.parse(localStorage.getItem('scores')) || [];
        var newScore = {
            name: name,
            correct: correct,
            incorrect: incorrect
        };
        scores.push(newScore);
        localStorage.setItem('scores', JSON.stringify(scores));
    }

});
