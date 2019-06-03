const nombre = {
	demand: true,
	alias: 'n'
}

const muestraest = {
	nombre
}	

const matematicas = {
	demand: true,
	alias: 'm'
}

const ingles = {
	demand: true,
	alias: 'i'
}

const programacion = {
	demand : true,
	alias: 'p'
}

const crear = {
	nombre,
	matematicas,
	ingles,
	programacion
}

const argv = require('yargs')
			 .command('crear', 'Crear un estudiante', crear)
			 .command('mostrar', 'Mostrar estudiantes')
			 .command('mostrarestudiante', 'Mostrar estudiante', muestraest)
			 .command('mostrarmat', 'Mostrar estudiantes que van ganando matematicas')
			 .command('mostrarprom', 'Mostrar el promedio de los estudiantes')
			 .command('mostrarpromayor', 'Muestra los estudiantes con un promedio por encima de 3')
			 .argv


module.exports = {
	argv
};