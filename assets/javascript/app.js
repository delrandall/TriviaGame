$(document).ready(function(){
	
	$('.questions').hide();
	$('.info').hide();
	$('#restart').hide();
	var correct = 0;
	var wrong = 0;
	var currentQ = {
		question:" ",
		right: " ",
		choices:[], 
	}
	
	var r = 0;
	var guess;

	//Questions with choices and answer
	var questions = [

		q1 = {question: "All the world's a stage, And all the men and women merely players; They have their exits and their entrances;",
			right: 'As You Like It by William Shakespeare',
			choices: ['Gone With The Wind by Margaret Mitchell', 'As You Like It by William Shakespeare', 'The Children Of Men by P.D. James', 'Dance with Dragons by George R. R. Martin']
			},
		q2 = {question: 'Remember to the last, that while there is life there is hope.',
			right: 'Wreck of the Golden Mary by Charles Dickens',
			choices:['The Time Machine by H.G. Wells', 'Don Quixote by Miguel de Cervantes Saavedra', 'The Shawshank Redemption by Stephen King', 'Wreck of the Golden Mary by Charles Dickens'],
		},
		q3 = {question: 'Hardships make or break people.',
			right: 'Gone With The Wind by Margaret Mitchell',
			choices:['Gone With The Wind by Margaret Mitchell', 'Great Expectations by Charles Dickens', 'Wreck of the Golden Mary by Charles Dickens', "The Handmaid's Tale by Margaret Atwood"],
		},
		q4 = {question: 'All we have to decide is what to do with the time that is given us.',
			right: 'The Fellowship of the Ring by J. R. R. Tolkien',
			choices:['The Time Machine by H.G. Wells', "Breakfast at Tiffany's by Truman Capote", 'The Fellowship of the Ring by J. R. R. Tolkien', 'Don Quixote by Miguel de Cervantes Saavedra'],
		},
		q5 = {question: "'A reader lives a thousand lives before he dies,' said Jojen. 'The man who never reads lives only one.'",
			right: 'A Dance with Dragons by George R. R. Martin',
			choices:['A Dance with Dragons by George R. R. Martin', "Oh, the Places You'll Go! by Dr. Seuss", 'Jane Eyre By Charlotte Brontë', 'Great Expectations by Charles Dickens'],
		},
		q6 = {question: 'What fresh hell is this?',
			right: 'Jane Eyre by Charlotte Brontë',
			choices:['Rita Hayworth and the Shawshank Redemption (Different Seasons) by Stephen King', 'The Children Of Men by P.D. James', 'Nineteen Eighty-Four by George Orwell', 'Jane Eyre by Charlotte Brontë'],
		},
		q7 = {question: 'Take my advice and live for a long, long time. Because the maddest thing a man can do in this life is to let himself die',
			right: 'Don Quixote by Miguel de Cervantes Saavedra',
			choices:['The Shawshank Redemption by Stephen King', "Breakfast at Tiffany's by Truman Capote", 'Don Quixote by Miguel de Cervantes Saavedra', "Oh, the Places You'll Go! by Dr. Seuss"],
		},
		q8 = {question: 'It was a bright cold day in April, and the clocks were striking thirteen.',
			right: 'Nineteen Eighty-Four by George Orwell',
			choices:['Nineteen Eighty-Four by George Orwell', 'The Time Machine by H.G. Wells', 'Henry VI, part one by William Shakespeare', 'Great Expectations by Charles Dickens'],
		},
		q9 = {question: 'We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.',
			right: "The Handmaid's Tale by Margaret Atwood",
			choices:['Dance with Dragons by George R. R. Martin', 'The Fellowship of the Ring by J. R. R. Tolkien', 'Nineteen Eighty-Four by George Orwell', "The Handmaid's Tale by Margaret Atwood"],
		},
		q10 = {question: 'It sounds plausible enough tonight, but wait until tomorrow. Wait for the common sense of the morning',
			right: 'The Time Machine by H.G. Wells',
			choices:['As You Like It by William Shakespeare ', 'The Time Machine by H.G. Wells', 'Jane Eyre by Charlotte Brontë', 'The Fellowship of the Ring by J. R. R. Tolkien'],
		},
	]

	var secondQuestions = [

		q1 = {question: "Life appears to me too short to be spent in nursing animosity or registering wrongs.",
			right: 'Jane Eyre by Charlotte Brontë',
			choices: ['As You Like It by William Shakespeare ', 'The Fellowship of the Ring by J. R. R. Tolkien', 'The Time Machine by H.G. Wells', 'Jane Eyre by Charlotte Brontë']
			},
		q2 = {question: 'Finally, from so little sleeping and so much reading, his brain dried up and he went completely out of his mind.',
			right: 'Don Quixote by Miguel de Cervantes Saavedra',
			choices:['Dance with Dragons by George R. R. Martin', 'Don Quixote by Miguel de Cervantes Saavedra', "Oh, the Places You'll Go! by Dr. Seuss", 'The Fellowship of the Ring by J. R. R. Tolkien'],
		},
		q3 = {question: 'We can experience nothing but the present moment, live in no other second of time, and to understand this is as close as we can get to eternal life.',
			right: 'The Children Of Men by P.D. James',
			choices:['The Children Of Men by P.D. James', 'The Fellowship of the Ring by J. R. R. Tolkien', 'Wreck of the Golden Mary by Charles Dickens', 'Jane Eyre by Charlotte Brontë'],
		},
		q4 = {question: 'We need never be ashamed of our tears.',
			right: 'Great Expectations by Charles Dickens',
			choices:['The Time Machine by H.G. Wells', 'Nineteen Eighty-Four by George Orwell', 'As You Like It by William Shakespeare ', 'Great Expectations by Charles Dickens'],
		},
		q5 = {question: 'Anyone who ever gave you confidence, you owe them a lot.',
			right: "Breakfast at Tiffany's by Truman Capote",
			choices:['The Children Of Men by P.D. James', 'Great Expectations by Charles Dickens', "Breakfast at Tiffany's by Truman Capote", 'The Fellowship of the Ring by J. R. R. Tolkien'],
		},
		q6 = {question: 'After all, tomorrow is another day.',
			right: 'Gone With The Wind by Margaret Mitchell',
			choices:['Gone With The Wind by Margaret Mitchell', 'As You Like It by William Shakespeare ', 'Jane Eyre by Charlotte Brontë', 'The Time Machine by H.G. Wells'],
		},
		q7 = {question: "Some birds are not meant to be caged, that's all. Their feathers are too bright, their songs too sweet and wild. So you let them go, or when you open the cage to feed them they somehow fly out past you. And the part of you that knows it was wrong to imprison them in the first place rejoices, but still, the place where you live is that much more drab and empty for their departure.",
			right: 'Rita Hayworth and the Shawshank Redemption (Different Seasons) by Stephen King',
			choices:['Gone With The Wind by Margaret Mitchell', 'Jane Eyre by Charlotte Brontë', "The Handmaid's Tale by Margaret Atwood", 'Rita Hayworth and the Shawshank Redemption (Different Seasons) by Stephen King'],
		},
		q8 = {question: 'Fight till the last gasp.',
			right: 'Henry VI, part one by William Shakespeare',
			choices:['Dance with Dragons by George R. R. Martin', 'Nineteen Eighty-Four by George Orwell', 'Henry VI, part one by William Shakespeare', 'Rita Hayworth and the Shawshank Redemption (Different Seasons) by Stephen King'],
		},
		q9 = {question: 'Get busy living or get busy dying.',
			right: "The Shawshank Redemption by Stephen King",
			choices:['The Shawshank Redemption by Stephen King', 'Don Quixote by Miguel de Cervantes Saavedra', 'The Fellowship of the Ring by J. R. R. Tolkien', 'Dance with Dragons by George R. R. Martin'],
		},
		q10 = {question: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
			right: "Oh, the Places You'll Go! by Dr. Seuss",
			choices:['Nineteen Eighty-Four by George Orwell', 'The Time Machine by H.G. Wells', 'The Children Of Men by P.D. James', "Oh, the Places You'll Go! by Dr. Seuss"],
		},
	]


	// timer code start
	 var clock = {
		time: 30,
		int1:0,
		int2:0,
		reset:function() {
			clock.time = 30; 
			$('#timerem').html("Time remaining: " + clock.time);
		},

		// Count down
		count: function() {
			clock.time--;
			$('#timerem').html("Time remaining: " + clock.time);
		},

		// Time start
		start:function() {
			int1 = setInterval(clock.count, 1000);
			int2 = setTimeout(clock.out, 30000);
		},

		// Time stop 
		stop: function (){
			clearInterval(int1);
			clearTimeout(int2);
		},

		// Time out function
		out: function() {
			clock.stop();
			$('.info').show();
			$('#info').html('Time Over!!! The correct answer is ' + currentQ.right + '!');
			$('.questions').hide();
			what.play();
			wrong++;
			setTimeout(setQuestion, 3000);
			
		}
	}

	// Question code begin 
	function setQuestion () {
		$('#restart').hide();
		if(r < questions.length){
			clock.reset();
			clock.start();
			$('.info').hide();
			$('.questions').show();
			currentQ = questions[r];
			console.log(currentQ);
			$('#question').html(currentQ.question);
				for(i=0; i<currentQ.choices.length; i++){
					$('#'+ parseInt(i+1)).attr('value', currentQ.choices[i]);
					$('#'+ parseInt(i+1)).html(currentQ.choices[i]);
			}
		r++; 

		} else {
		$('.questions').hide();
		$('#info').show();
		$('#info').html('You had ' + correct + ' questions correct and ' + wrong + ' questions wrong');
		$('#restart').show();
		}

	}; 
	 
	$('#start').on('click', function(){
		$('#start').hide();
		setQuestion();	
	});
	$('#restart').on('click', function(){
		$('#restart').hide();
		r=0;
		correct=0;
		wrong=0; 
		setQuestion();	

	});

	/*questions = $(".answers");

	 $(this).text(questions.q1.choices[0]);
	 /*  $(this).text(questions.q2.choices[0]);
	  $(this).text(questions.q3.choices[0]);
	  $(this).text(questions.q4.choices[0]);*/
	 
	



	$('.btnChoice').click(function(){
		guess = $(this).attr("value");

		console.log($(this).attr("value"));

		if($(this).attr("value") == currentQ.right){
			$('.info').show();
			$('#info').html('Correct!')
			$('.questions').hide();;
			clock.stop();
			setTimeout(setQuestion, 3000);
			correct++;
		}  else {
			$('.info').show();
			$('#info').html('The correct answer is ' + currentQ.right + '!');
			$('.questions').hide();
			clock.stop();
			setTimeout(setQuestion, 3000);
			what.play();
			wrong++;
		}
	}); 
	var q = questions.length; 

	console.log(questions.length)

	var timer = {

	}

});