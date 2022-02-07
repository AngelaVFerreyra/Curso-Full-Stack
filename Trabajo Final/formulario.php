<?php
	$mensaje="Muchas gracias por registrarse";
	echo $mensaje;

	/*Genera archivo.txt*/
	$file = fopen("archivo.txt", "w");
	
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$dni = $_POST['dni'];
	$email = $_POST['email'];
	
	$contenido = "
	Nombre Completo: $nombre $apellido
	DNI: $dni
	Email: $email";
	
	fwrite($file, $contenido);
	
	fclose($file);
?>
