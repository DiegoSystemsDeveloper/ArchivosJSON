const {argv} = require('./yargs');
const funciones = require('./funciones');

let comando = argv._[0];

switch(comando) {
	case 'crear': 
		funciones.crear(argv);
	break;

	case 'mostrar':
		funciones.mostrar();
	break;

	case 'mostrarestudiante':
		funciones.mostrarestudiante(argv.nombre);
	break;

	case 'mostrarmat':
		funciones.mostrarmat();
	break;

	case 'mostrarprom': 
		funciones.mostrarprom();
	break;

	case 'mostrarpromayor':
		funciones.mostrarpromayor();
	break;

	default: 
	console.log('No ingreso una funcion existente');
}