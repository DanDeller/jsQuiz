<!DOCTYPE html>
<html>
<head>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
	<title>Test</title>
	<style type="text/css">
	body {font-family: open sans}
	ul {margin: 0 0 20px -40px; list-style-type: none}
	ul li {margin: 0 0 10px 0}
	input[type=radio] {margin: 0 10px 0 0}
	.radio {display: block}
	.label {display: inline}
	</style>
</head>
<body>
<input id="next" type="submit" value="" />
<ul id="list"></ul>
<script type="text/javascript">
	var allQuestions = [
	{
		question: "Who is Prime Minister of the United Kingdom?", 
		choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
		correctAnswer: 'Tony Blair'
	},
	{
		question: "Who is your father?", 
		choices: ["Darth Vader", "Murray", "Test Tube", "Bob Saget"], 
		correctAnswer: 'Darth Vader'
	},
	{
		question: "What is the third law of thermodynamics?", 
		choices: ["lol what?","Pass", "The branch of physical science that deals with the relations between heat and other forms of energy (such as mechanical, electrical, or chemical energy), and, by extension, of the relationships between all forms of energy.", "nope" ], 
		correctAnswer: 'The branch of physical science that deals with the relations between heat and other forms of energy (such as mechanical, electrical, or chemical energy), and, by extension, of the relationships between all forms of energy.'
	},
	{
		question: "What are you waiting for?!?!?!?", 
		choices: ["A1", "A2", "A3", "A4"], 
		correctAnswer: 'A2'
	}
	];

	// set default options
	var q = 0,
	    numberRight = 0,
            qLength = allQuestions.length;

	// create container for quiz
	var div = document.createElement('div');
			div.className = 'quiz-div';
			document.body.appendChild(div);

	// create p tag to hold all questions
	var question = document.createElement('p');
			div.appendChild(question);

	// get the list
	var list = document.getElementById('list');
			div.appendChild(list);

	// next button
	var next = document.getElementById('next');
			next.value = 'Question ' + q;
			div.appendChild(next);

	var add = document.getElementById('add');

	// function to set questions and answers
	function setQuestion(q) {
		for (var i = 0, length = allQuestions[q].choices.length; i < length; i++) {
			var qText = document.createTextNode(allQuestions[q].choices[i]),
					li = document.createElement('li'),
			    radio = document.createElement('input');
					radio.type = 'radio';
					radio.name = 'question ' + q;
					radio.value = allQuestions[q].choices[i];

					question.innerHTML = allQuestions[q].question;
					li.appendChild(radio);
					li.appendChild(qText);
					list.appendChild(li);
		} // end for loop
	}; // end setQuestion()

	next.onclick = function() {
		var radioGroup = document.getElementsByName('question ' + q),
				checked = false;
		for (var x = 0; x < radioGroup.length; x++) {
			if (radioGroup[x].checked) {
				checked = true;
				console.log(radioGroup[x].value);
				if (radioGroup[x].value === allQuestions[q].correctAnswer) {
					numberRight++;
					console.log(numberRight);
				} else {
					var right = document.createElement('p');
							div.appendChild(right);
							right.innerHTML = 'For question ' + q + ', You choose ' + allQuestions[q].choices[x] + '. The correct answer was ' + allQuestions[q].correctAnswer + '.';
				} // end if values match correct answers
			} // end if checked function
		} // end for loop

		// check to make sure an option is selected before moving on
		if (!checked) {
			alert('check something first');
			return undefined;
		} 

		// set next Q & A
		q++

		// remove current answers and show next set
		while (list.firstChild) {
			list.removeChild(list.firstChild);
		}

		// if index is less than qLength, set next Q & A's
		// if index is equal to qLength, display final score
		if (q < qLength) {
			setQuestion(q);
			next.value = 'Question ' + q;
		} else if (q === qLength) {
			div.removeChild(list);
			div.removeChild(next);
			question.innerHTML = 'That\'s it! You got ' + numberRight + ' out of 4 right.';
		}
	} // end onclick function

	// load function on page load
	window.onload = function() {
		setQuestion(0);
	};
</script>
</body>
</html>
