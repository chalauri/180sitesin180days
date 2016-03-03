function deleteOldData(table){
	while(table.firstChild){
		table.removeChild(table.firstChild);
	}
}

function change(){
	var e = document.getElementById("combo");
	var country = e.options[e.selectedIndex].value;
	console.log(country);
	
	if(country == "geo"){
		drawGeo();
	}
	
	if(country == "en"){
		drawEn();
	}
	
	if(country == "ger"){
		drawGer();
	}
}


function drawGeo(){
	var table = document.getElementById('table');
	deleteOldData(table);
	
	for(var i=0; i < 16; i++){
		var tr = document.createElement('tr');
		var td0 = document.createElement('td');
		var t0 = document.createTextNode(i+1);
		var td = document.createElement('td');
		var t = document.createTextNode("GEO Team " + i);
		var td2 = document.createElement('td');
		var t2 = document.createTextNode(16-i);
		
		
		if(i == 0){
			tr.bgColor="green";
		}
		
		if(i == 1 || i == 2){
			tr.bgColor="yellow";
		}
		
		if(i == 14 || i == 15){
			tr.bgColor="red";
		}
		
		if(2 < i && i < 14){
			tr.bgColor="grey";
		}
		
		td.appendChild(t);
		td2.appendChild(t2);
		td0.appendChild(t0);
		tr.appendChild(td0);
		tr.appendChild(td);
		tr.appendChild(td2);
		table.appendChild(tr);
	}
}

function drawEn(){
	var table = document.getElementById('table');
	deleteOldData(table);
	
	for(var i=0; i < 20; i++){
		var tr = document.createElement('tr');
		var td0 = document.createElement('td');
		var t0 = document.createTextNode(i+1);
		var td = document.createElement('td');
		var t = document.createTextNode("ENGLAND Team " + i);
		var td2 = document.createElement('td');
		var t2 = document.createTextNode(16-i);
		
	
		if(i < 4){
			tr.bgColor="green";
		}
		
		if(i > 16){
			tr.bgColor="red";
		}
		
		if(3 < i && i < 17){
			tr.bgColor="grey";
		}
		
		td.appendChild(t);
		td2.appendChild(t2);
		td0.appendChild(t0);
		tr.appendChild(td0);
		tr.appendChild(td);
		tr.appendChild(td2);
		table.appendChild(tr);
	}
}
	
	function drawGer(){
	var table = document.getElementById('table');
	deleteOldData(table);
	
	for(var i=0; i < 20; i++){
		var tr = document.createElement('tr');
		var td0 = document.createElement('td');
		var t0 = document.createTextNode(i+1);
		var td = document.createElement('td');
		var t = document.createTextNode("GERMANY Team " + i);
		var td2 = document.createElement('td');
		var t2 = document.createTextNode(16-i);
		
	
		if(i < 3){
			tr.bgColor="green";
		}
		
		if(i > 16){
			tr.bgColor="red";
		}
		
		if(2 < i && i < 17){
			tr.bgColor="grey";
		}
		
		td.appendChild(t);
		td2.appendChild(t2);
		td0.appendChild(t0);
		tr.appendChild(td0);
		tr.appendChild(td);
		tr.appendChild(td2);
		table.appendChild(tr);
	}
}


