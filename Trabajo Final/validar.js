

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  let id = (id) => document.getElementById(id);

	let classes = (classes) => document.getElementsByClassName(classes);

	let nombre = id("nombre"),
		apellido = id("apellido"),
		dni = id("dni"),
	  email = id("email"),
	  form = id("form"),
	  errorMsg = classes("error");
	
	form.addEventListener("submit", (e) => {
	  engine(nombre, 0, "Ingrese su nombre");
	  engine(apellido, 1, "Ingrese su apellido");
	  engine(dni, 2, "Ingrese su dni");
	  engine(email, 3, "Ingrese su email");
	  
	});

	let engine = (id, serial, message) => {
	  if (id.value.trim() === "") {
		errorMsg[serial].innerHTML = message;
		id.style.border = "2px solid red";
		
	  } else {
		errorMsg[serial].innerHTML = "";
		id.style.border = "0px solid transparent"; 
		return true;
	  } 
	  
	};
	
	this.submit();
}
