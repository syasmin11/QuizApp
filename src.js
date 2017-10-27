const categories = () => {

	let category = $('input[name=category]:checked', '#categoryForm').val();
	let questionsDataHandler = (data) => {
    		let questions = data.results;
    		let question = questions[0];
    		$('#questionPage').fadeIn(700);
    		$('#question').html(question.question)
    		
    		let correctOption = Math.floor(Math.random() * 4);
    		for (let i = 0; i < 4; i++) {
    			
                if (correctOption == i) {
                 	$("#option" + i).html(question.correct_answer);
                } else {
                	let answer = question.incorrect_answers.pop();
                	$("#option" + i).html(answer);
                }    			
            };

    		let selectedAnswer = $('input[name=answer]:checked', '#answers').label() ;
    		console.log (selectedAnswer)
	    };
	switch (category) {
	  case 'generalKnowledge':
	    $.getJSON("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple", questionsDataHandler);
	    break;
	  case 'scienceNature':
	    questions = $.getJSON("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple",questionsDataHandler);
	    break;
	  case 'politics': 
	    questions = $.getJSON("https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple", questionsDataHandler);
	    break;
	  default: 
	    console.log('Please choose a category to continue!');
	    break;
	}
};

$('#catButton').on('click', () => {
	$('#catPage').fadeOut(500)
	categories()
});

/*answer_function () {
	let selectedAnswer = $('input[name=answer]:checked', '#answers').val();
};*/
/* /const quiz = () => {
	let score= 0;
	for (let questioNo=0; questionNo <10; questioNo++) {
            let currentQuestion = 0;
            fetchQuestion(data.results[currentQuestion]);
            $("#nextQuestion").hide();
            $("#scorecard").html("0 / 10");

            var score = 0;

            $("#checkAnswer").click(function() {
                if (data.results[currentQuestion].correct_answer === $("#option" + selectedAnswer).html()) {
                    score++;
                    $("#scorecard").html(`Correct! ${score} / 10`);
                } else {
                    $("#scorecard").html(`Incorrect! ${score} / 10`);
                }
                $("#nextQuestion").show();
                $("#checkAnswer").hide();
            })
	}
};


*/