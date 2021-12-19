var numeros=[];

for(var i=0; i<5; i++){
	numeros[i]=parseInt(prompt("Ingrese numeros diferentes",""));
}

/*indica si hay elementos repetidos*/
numeros.sort();
var duplicados = [];

for(var i=0; i<numeros.length; i++){
  if(numeros[i + 1] == numeros[i]){
	duplicados.push(numeros[i]);
  }
}

if(duplicados.length == 0){
	alert("Los elementos ingresados son: " + numeros + " y el valor mas grande es: " + numeros[numeros.length-1]);
}else{
	if(duplicados.length == 1){
		alert("Ha repetido un elemento, el cual es: " + duplicados);
	}else{
		alert("Ha ingresado elementos iguales y son: " + duplicados);
	}				
}