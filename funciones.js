const fs = require('fs');
let listaEstudiantes = [];

const crear = (estudiante) => {
	listar();
	let est = {
		nombre: estudiante.nombre,
		matematicas: estudiante.matematicas,
		ingles: estudiante.ingles,
		programacion: estudiante.programacion
	};
	let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre);
	if(!duplicado) {
		listaEstudiantes.push(est);
		console.log(listaEstudiantes);
		guardar();
	} else {
		console.log('Ya existe otro estudiante con ese nombre');
	}
}

const mostrar = () => {
	listar()
	console.log('Notas de los estudiantes');
	listaEstudiantes.forEach(estudiante => {
		console.log(estudiante.nombre);
		console.log('Notas: ');
		console.log('matematicas: ' + estudiante.matematicas);
		console.log('ingles: ' + estudiante.ingles);
		console.log('programacion: ' + estudiante.programacion);
	})
}

const mostrarestudiante = (nom) => {
	listar() 	
	let est = listaEstudiantes.find(buscar => buscar.nombre == nom);
	if(!est) {
		console.log('No se encontro un estudiante con ese nombre');
	} else {
		console.log(est.nombre);
		console.log('Notas: ');
		console.log('matematicas: ' + est.matematicas);
		console.log('ingles: ' + est.ingles);
		console.log('programacion: ' + est.programacion);
	}
}

const mostrarmat = () => {
	listar()
	let ganan =listaEstudiantes.filter(mat => mat.matematicas >= 3);
	if(ganan.length == 0) {
		console.log('Ningun estudiante va ganando');
	}else {
		ganan.forEach(estudiante => {
			console.log(estudiante.nombre);
			console.log('notas: ');
			console.log('matematicas: ' + estudiante.matematicas);
		});
	}
}

const mostrarprom = () =>{
	listar()
	if(listaEstudiantes.length == 0) {
		console.log('No hay ningun estudiante registrado');
	} else {
		listaEstudiantes.forEach(estudiante => {
			let prom = (estudiante.matematicas + estudiante.ingles + estudiante.programacion)/3;
			console.log(estudiante.nombre);
			console.log('matematicas: ' + estudiante.matematicas);
			console.log('ingles: ' + estudiante.ingles);
			console.log('programacion: ' + estudiante.programacion);
			console.log('Promedio: ' + prom);
		});
	}
}

const mostrarpromayor = () => {
	listar()
	let promayor = listaEstudiantes.filter(estudiante => (estudiante.matematicas + estudiante.ingles + estudiante.programacion)/3 >= 3);
	if(promayor.length == 0){ 
		console.log('Ningun estudiante tiene promedio por encima de 3');
	} else {
		console.log('Promedios' + '\n');
		promayor.forEach(estudiante => {
			let prom = (estudiante.matematicas + estudiante.ingles + estudiante.programacion)/3;
			console.log(estudiante.nombre);
			console.log('promedio: ' + prom);
		}); 
	}
}

const listar = () => {
	try {
		listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
	} catch(error) {	
		listaEstudiantes = [];
	}
}

const guardar = () => {
	let datos = JSON.stringify(listaEstudiantes);
	fs.writeFile('listado.json', datos, (err) => {
		if(err) throw (err);
		console.log('Archivo creado con exito');
	})
}

module.exports = {
	crear,
	mostrar,
	mostrarestudiante,
	mostrarmat,
	mostrarprom,
	mostrarpromayor
};