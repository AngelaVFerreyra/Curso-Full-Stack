$(document).ready(function(){
    $('select').formSelect();
});


let $pais = document.getElementById('icon_pais')
let $provincia = document.getElementById('icon_provincia')
let $ciudad = document.getElementById('icon_ciudad')


let paises = ['España', 'Argentina', 'Colombia', 'Francia', 'Peru']

let provincias = ['-','Andalucía','Asturias','Baleares','Canarias','Castilla y León','Castilla-La Mancha', 
					'Salta','San Juan','San Luis','La Rioja','La Pampa',
					'Valle del Cauca','Magdalena','Antioquia','Bolívar',
					'Picardía','Lemosín','Dordogne', 'Essonne','Gironde']
					
let ciudades = ['-','Sevilla', 'Granada', 'Gijón', 'Oviedo', 'Palma de Mallorca', 'Ibiza', 'Valverde', 'Santa Cruz de Tenerife' , 'Salamanca', 'Valladolid', 'Toledo', 'Albacete',
				'Salta', 'Tartagal', 'San Juan', 'Vallecito', 'Bermejo', 'Villa Mercedes', 'Merlo', 'Chilecito', 'Anillaco', 'Santa Rosa', 'General Pico', 'Eduardo Castex',
				'Palmira', 'Buenaventura', 'Santamarta', 'Remolino', 'Medellin', 'San Roque', 'Cartagena', 'Arjona',
				'Aisne', 'Somme', 'Creuse', 'Correze', 'Tulle', 'Aurillac', 'Lardy', 'Evry', 'Burdeos', 'Salaunes']

function mostrarLugares(arreglo, lugar) {
    let elementos = '<option disabled selected>--Seleccione--</option>'

    for(let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] +'">' + arreglo[i] +'</option>'
    }

    lugar.innerHTML = elementos
}

mostrarLugares(paises, $pais)

function recortar(array, inicio, fin, lugar) {
    let recortar = array.slice(inicio, fin)
    mostrarLugares(recortar, lugar)
}

$pais.addEventListener('change', function() {
    let valor = $pais.value

    switch(valor) {
        case 'España':
            recortar(provincias, 1, 7, $provincia)
        break
        case 'Argentina':
            recortar(provincias, 7, 12, $provincia)
        break
		case 'Colombia':
            recortar(provincias, 12, 16, $provincia)
        break
		case 'Francia':
            recortar(provincias, 16, 21, $provincia)
        break
		default:
			recortar(provincias, 0, 0, $provincia)
    }
	$('#icon_provincia').formSelect();
    $ciudad.innerHTML = ''
})

$provincia.addEventListener('change', function() {
    let valor = $provincia.value

	switch(valor) {
		/*España*/
		case 'Andalucía':
			recortar(ciudades, 1, 3, $ciudad)
		break
		case 'Asturias':
			recortar(ciudades, 3, 5, $ciudad)
		break
		case 'Baleares':
			recortar(ciudades, 5, 7, $ciudad)
		break
		case 'Canarias':
			recortar(ciudades, 7, 9, $ciudad)
		break
		case 'Castilla y León':
			recortar(ciudades, 9, 11, $ciudad)
		break
		case 'Castilla-La Mancha':
			recortar(ciudades, 11, 13, $ciudad)
		break
		/*Argentina*/
		case 'Salta':
			recortar(ciudades, 13, 15, $ciudad)
		break
		case 'San Juan':
			recortar(ciudades, 15, 18, $ciudad)
		break
		case 'San Luis':
			recortar(ciudades, 18, 20, $ciudad)
		break
		case 'La Rioja':
			recortar(ciudades, 20, 22, $ciudad)
		break
		case 'La Pampa':
			recortar(ciudades, 22, 25, $ciudad)
		break
		/*Colombia*/
		case 'Valle del Cauca':
			recortar(ciudades, 25, 27, $ciudad)
		break
		case 'Magdalena':
			recortar(ciudades, 27, 29, $ciudad)
		break
		case 'Antioquia':
			recortar(ciudades, 29, 31, $ciudad)
		break
		case 'Bolívar':
			recortar(ciudades, 31, 33, $ciudad)
		break
		/*Francia*/
		case 'Picardía':
			recortar(ciudades, 33, 35, $ciudad)
		break
		case 'Lemosín':
			recortar(ciudades, 35, 37, $ciudad)
		break
		case 'Dordogne':
			recortar(ciudades, 37, 39, $ciudad)
		break
		case 'Essonne':
			recortar(ciudades, 39, 41, $ciudad)
		break
		case 'Gironde':
			recortar(ciudades, 41, 43, $ciudad)
		break
		default:
			recortar(ciudades, 0, 0, $ciudad)
	}
	$('#icon_ciudad').formSelect();
})


