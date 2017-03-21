// JavaScript Document
function Resolver(operador){
	var g=new Array(2);
	var e=new Array(2);
	var r;
	
	g[0]=document.getElementById('X1').value;
	g[1]=document.getElementById('X2').value;
	e[0]=document.getElementById('y1').value;
	e[1]=document.getElementById('y2').value;
	switch(operador){
	case'=':
			 h=g[0]-g[1];
			 j=e[0]-e[1];
			 l=Math.pow(h,2);
			 k=Math.pow(j,2);
			 y=parseInt(l+k);
			 t=Math.sqrt(y);
			 r=t;
			 break;
  case'b':
			 document.getElementById('X1').value="";
			 document.getElementById('X2').value="";
			 document.getElementById('y1').value="";
			 document.getElementById('y2').value="";
			 r="";
			 break;
	}
	document.getElementById('R').value=r;
	
}