function cantA(){
	var textt=$("#texto").val();
	var cant=0;
	
	for(var i=0; i<textt.length; i++){
		if(textt[i] == 'a' || textt[i]=='A'){
			cant++;
		}
	}
	
	alert("Cantidad de Letras A: " + cant);
}