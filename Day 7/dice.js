$(document).ready(function(){
	
	var score = 0;
	
	scores = [];
	
	var one = "images/dice1.png";
	var two = "images/dice2.png";
	var three = "images/dice3.png";
	var four = "images/dice4.png";
	var five = "images/dice5.png";
	var six = "images/dice6.png";
	
	var current;
	
	var dices = [one,two,three,four,five,six];
	
	$('.button.roll').on('click', start);
	//$('.button.stop').on('click', stop);
	//$('.button.reset').on('click', again);
	
	function stop(){
		$('.button.roll').off('click');
		$('.button.stop').off('click');
		$('.button.reset').off('click');

		var tbl = document.getElementById('rating');
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		var t = document.createTextNode(score);
		td.appendChild(t);
		tr.appendChild(td);
		tbl.appendChild(tr);
		
		
		score = 0;
		$('.text').text("");
		
		$('.button.roll').on('click', start);
		$('.button.stop').on('click', stop);
		$('.button.reset').on('click', again);
	}
	
	function again(){
		$('.button.roll').off('click');
		$('.button.stop').off('click');
		$('.button.reset').off('click');
		

		score = 0;
		$('.text').text("");
		var tbl = document.getElementById('rating');
		while(tbl.firstChild){
			tbl.removeChild(tbl.firstChild);
		}
		
		$('.diceimage').show();
		$('.result').hide();
		
		$('.button.roll').on('click', start);
		//$('.button.stop').on('click', stop);
		$('.button.reset').on('click', again);
	}
	
	
	function start(){
		
		$('.button.roll').off('click');
		$('.button.stop').off('click');
		$('.button.reset').off('click');
		
		var idx = Math.floor(Math.random()*6)+1;
		current = dices[idx];
		
		
		$('.result').hide();
		$('.diceimage').show();

		countDown(idx);
	};
	
	function countDown(idx){
		var i = 3;

		count();

		function count() {
			$('.dice').addClass('shake');
		//	$('.text').text(i);
			

			if (i == 0) {
				displayResults(idx); 
			} else {
				i -= 1;
				setTimeout(count, 500);
			}
		}
		
	};
	
	function displayResults(idx){
		
		
		console.log(idx)
		score += idx;
		
		if(score > 21){
			$('.text').text("YOU LOOSE");
					
			$('.button.roll').on('click', start);
		//	$('.button.stop').on('click', stop);
			$('.button.reset').on('click', again);
			
			$('.diceimage').show();
		$('.result').hide();
			
			return;
		}
		
	
		$('.dice').removeClass('shake');
		$('.text').text(score);
		$('.diceimage').hide();
		$('.result.'+idx).show();
		
		$('.button.roll').on('click', start);
		$('.button.stop').on('click', stop);
		$('.button.reset').on('click', again);
		setTimeout("",400)
	};
	
});