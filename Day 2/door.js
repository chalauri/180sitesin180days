function openMusic(lnk){
	var fd = document.getElementById("d1");
	document.body.removeChild(fd);
	
	var sd = document.getElementById("d2");
	document.body.removeChild(sd);
	
	var td = document.getElementById("d3");
	document.body.removeChild(td);

	var textDiv = document.getElementById('textDiv');
	var greeting = document.getElementById('greeting');
	while (textDiv.firstChild) {
    textDiv.removeChild(textDiv.firstChild);
	}
	
	var div1 = document.createElement("div");
	
	var center = document.createElement("center");
	var iframe = document.createElement("iframe");
	iframe.src = lnk;
	iframe.width = "500";
	iframe.height ="500";
	iframe.frameborder = "0";
	iframe.allowfullscreen;
	
	center.appendChild(iframe);
	div1.appendChild(center);
	
	var div2 = document.createElement("div");
	var center2 = document.createElement("center");
		
	var link = document.createElement('a');
	link.href = "index.html";
	link.text = "Return To Startpage";
	link.align = "center";
	
	center2.appendChild(link);
	div2.appendChild(center2);
	
	document.body.appendChild(div1);
	document.body.appendChild(div2);
}

$(document).ready(function()
{
    $( 'img' ).click(function() 
    {
        var lnk = $(this).attr('lnk');
       
		openMusic(lnk);
    });
});

