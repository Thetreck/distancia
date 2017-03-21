// JavaScript Document
function Resolver(operador){
	var g=new Array(2);
	var i=new Array(2);
	var e=new Array(2);
	
	g[0]=document.getElementById('k').value;
	g[1]=document.getElementById('h').value;
	i[0]=document.getElementById('y1').value;
	i[1]=document.getElementById('y2').value;
	switch(operador){
   case'l':
		
		break;
	case'f':
	    document.getElementById("operador").src="img/resta.png"
		document.getElementById('k').value="";
	    document.getElementById('h').value="";
		document.getElementById('y1').value="";
		document.getElementById('y2').value="";			
		e[0]="";
		break;
	}
	document.getElementById('R').value=e[0];
	
}