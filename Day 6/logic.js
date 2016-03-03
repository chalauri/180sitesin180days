$(document).ready(function(){

	var rock = "images/rock.png"
	var paper = "images/paper.png"
	var scissors = "images/scissors.png"
	var hands = {rock: rock, paper: paper, scissors: scissors}
	var choices = ['rock', 'paper', 'scissors'];
	var userChoice, compChoice;
	
	$('.button').on('click', start);
	
	function start(){
		
		$('.button').off('click');
		
		userChoice = this.id;
		compChoice = choices[Math.floor(Math.random()*3)];
		
		
		$('.result').hide();
		$('.image').show();

		countDown();
	};
	
	
	function countDown(){
		var i = 3;

		count();

		function count() {
			$('.hands').addClass('shake');
			$('#score_container').text(i);
			

			if (i == 0) {
				displayResults(); 
			} else {
				i -= 1;
				setTimeout(count, 500);
			}
		}
		
	};
	
	function displayResults(){
		
		$('.hands').removeClass('shake');
		$('#score_container').text('Shoot!');
		
		$('.image').hide();
		$('.result.right.' + userChoice).show();
		$('.result.left.' + compChoice).show();
		
		setTimeout(determineWinner,400)
	};
	
	
	function determineWinner(){
			if ( userChoice == compChoice ) {
				$('#score_container').text('Tie!');
			} else if ( (userChoice == 'rock' && compChoice == 'scissors') || (userChoice == 'paper' && compChoice == 'rock') || (userChoice == 'scissors' && compChoice == 'paper') ) {
				$('#score_container').text('You Win!');
			} else {
				$('#score_container').text('You Lose!');
			};

			$('.button').on('click', start);
	}
	
	
	
});