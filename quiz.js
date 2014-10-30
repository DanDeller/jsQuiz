<!DOCTYPE html>
<html>
<head>
	<title>Test</title>
	<style type="text/css">
	ul {list-style-type: none; margin: 0 0 20px -40px}
	ul li {margin: 0 0 5px 0;}
	input[type=radio] {margin: 0 10px 0 0;}
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
		correctAnswer: 3
	},
	{
		question: "Who is your father?", 
		choices: ["Darth Vader", "Murray", "Alf", "test tube"], 
		correctAnswer: 0
	},
	{
		question: "What is the third law of thermodynamics?", 
		choices: ["lol what","stop", "C", "nope" ], 
		correctAnswer: 1
	},
	{
		question: "What is this?", 
		choices: ["Stuff", "Junk", "Trash", "I'm over writing answers"], 
		correctAnswer: 2
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
				if (x === allQuestions[q].correctAnswer) {
					numberRight++;
					console.log(numberRight);
				} // end if values match correct answers
			} // end if checked function
		} // end for loop

		// check to make sure an option is selected before moving on
		if (!checked) {
			alert('check something first');
			// console.log(checked);
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
	} // end onclick functionh

	// load function on page load
	window.onload = function() {
		setQuestion(0);
	};
</script>
</body>
</html>
