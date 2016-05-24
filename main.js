$(function(){

	// var playerScore = 0;

	// question one will populate screen
// Start (button)
	// When person clicks button it will disappear
	$(".start").on('click', function() {
		$(this).addClass('animated rotateOut');
		window.setTimeout(function(){
		$(this).addClass("disappear");
		$(".submit-container").addClass("disappear");
		$( ".questions" ).addClass( "appear" );
		//When you click the start button
		//run the start game function
		},920);
	});

	

	//We can make an event listener that listens for when any for is submitted
	// function game() {

// Questions 1-5 appears - 3 answers for each question to choose from

	// When an answer is clicked, jQuery checks array for point value
	// current point value will return playerscore

		



		$('form').addClass('animated fadeIn');
		// window.setTimeout(function(){
		// },9000);
		$('form').on('submit', function(e) {
			e.preventDefault();
			
			var questionOneChecked = parseInt($("input[name=questionOne]:checked").val());
			// console.log(questionOneChecked);
			var questionTwoChecked = parseInt($("input[name=questionTwo]:checked").val());

			var questionThreeChecked = parseInt($("input[name=questionThree]:checked").val());

			var questionFourChecked = parseInt($("input[name=questionFour]:checked").val());

			var questionFiveChecked = parseInt($("input[name=questionFive]:checked").val());
			

			if (isNaN(questionOneChecked) || isNaN(questionTwoChecked) || isNaN(questionThreeChecked) || isNaN(questionFourChecked) || isNaN(questionFiveChecked)) {
				alert("YOU DIDN\'T DO IT");

				// console.log('pooooop');
				return;
			}
			
			
			var finalScore = (questionOneChecked + questionTwoChecked + questionThreeChecked + questionFourChecked + questionFiveChecked);

			$(this).removeClass("appear");


			// variables to populate shiaSurpriseElement
			var shiaSupriseImage = ""; 
			var shiaImageAlt = "";
			var shiaHeaderTag = "";
			var shiaPTag = "";

			// if score falls into range print that answer - 
			if(finalScore <= 20){
			// inject image and text into shiasuprise answer div 
				shiaSupriseImage = "images/evenstevensShia.jpg";
				shiaImageAlt = "Even Stevens Shia LaBeouf";
				shiaHeaderTag = "Even Stevens Shia LaBeouf!";
				shiaPTag = "You can't buy back your respect; you can't buy back your career. You only get one, so I don't want to mess that up.";
			} 
			else if(finalScore <= 40 && finalScore > 20){
				shiaSupriseImage = "images/transformersShia.jpg";
				shiaImageAlt = "Transformers Shia LaBeouf";
				shiaHeaderTag = "Transformers Shia LaBeouf!";
				shiaPTag = "I want my audience to know me for my work, not because of who I'm dating or what drugs I'm on or what club I went to.";
			} 
			else if(finalScore <= 60 && finalScore > 40){
				shiaSupriseImage = "images/justdoitShia.png";
				shiaImageAlt = "Just Do It Shia LaBeouf";
				shiaHeaderTag = "Just Do It Shia LaBeouf!";
				shiaPTag = "Don\'t let your dreams be dreams. Yesterday you said tomorrow. So just do it. Make your dreams come true. Just do it!";
			} 
			else if(finalScore <= 80 && finalScore > 60){
				shiaSupriseImage = "images/paperbagShia.jpg";
				shiaImageAlt = "Paperbag Head Shia LaBeouf";
				shiaHeaderTag = "Paperbag Head Shia LaBeouf!";
				shiaPTag = "I'm an actor, but I'm an artist.";
			} 
			else {
				shiaSupriseImage = "images/cannibalShia.jpg";
				shiaImageAlt = "Actual Cannibal Shia LaBeouf";
				shiaHeaderTag = "Actual Cannibal Shia LaBeouf!";
				shiaPTag = "Running for your life, From Shia Labeouf. He’s brandishing a knife. It's Shia Labeouf. Lurking in the shadows… Hollywood superstar Shia Labeouf. Living in the woods, Shia Labeouf. Killing for sport, Shia Labeouf. Eating all the bodies Actual, cannibal Shia Labeouf!";
			}
			


			var shiaSupriseElement = '<img src="' + shiaSupriseImage + '" alt="' + shiaImageAlt + '">' + '<h2>' + shiaHeaderTag + '</h2>' + '<p>' + shiaPTag + '</p>';
				$('.shiaSurpriseAnswer').html(shiaSupriseElement);

			$(".playAgain-container").toggleClass("disappear");
			$(".shiaSurpriseAnswer").toggleClass("disappear");

		});
	// }

		$(".playAgain").on('click', function() {
			$("input[name=questionOne]:checked").prop('checked', false);
			$("input[name=questionTwo]:checked").prop('checked', false);
			$("input[name=questionThree]:checked").prop('checked', false);
			$("input[name=questionFour]:checked").prop('checked', false);
			$("input[name=questionFive]:checked").prop('checked', false);
			$(".playAgain-container").toggleClass("disappear");
			$('.shiaSurpriseAnswer').toggleClass('disappear');
			$('form').toggleClass('appear');
		});
	

	// current point value will return playerscore



	// Question disapears 
	// The shia image that matches final playerscore range appears
	// print answer in html

// Shia Surprise!
	

// Take quiz again
	// button re-starts quiz

});









