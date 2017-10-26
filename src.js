const categories = () => {
	let category = '';
	switch (category) {
	  case 'generalKnowledge':
	    questions = $.getJSON("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
	    console.log(questions)
	    break;
	  case 'scienceNature':
	    questions = $.getJSON("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple");
	    console.log(questions)
	    break;
	  case 'politics': 
	    questions = $.getJSON("https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple");
	    console.log(questions)
	    break;
	  default: 
	    console.log('Please choose a category to continue!');
	    break;
	}
	$('#catbutton').on ('click', () => {
		categories(category)
		$('.catPage').hide()
	})
}

const quiz = () => {
}
 


