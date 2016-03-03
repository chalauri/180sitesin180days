function change(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	
	var body = document.body;
	
	body.style.backgroundColor  = 'rgb('+r+','+g+','+b+')';
}