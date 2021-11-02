// Usamos el modo estricto
"use strict";

// Definimos la clase alumno

class Alumno {


	constructor(id, nombre, notaMedia) {
		// Atributos clase alumno
		this.id = id;
		this.nombre = nombre;
		this.notaMedia = notaMedia;
	}
	// Funciones clase alumno

	consultarNota() {
		alert("El alumno " + this.nombre + " tiene de nota " + this.notaMedia);
	}

	// Cambia la nota media
	cambiarNotaMedia(nuevaNota) {
		this.notaMedia = nuevaNota;
	}

}

// Definimos la clase Colegio


class Colegio {

	constructor(nombre, nAulas, nAlumnos) {
		// Atributos del colegio
		this.nombre = nombre;
		this.nAulas = nAulas;
		// Aqui guardaremos Array de alumnos
		this.arrayAlumnos = new Array();

		// Codigo inicializador del colegio	
		for (let i = 0; i < nAlumnos; i++) {
			// Creamos alumnos con id i, nombre Alumnoi y media 5.0
			this.arrayAlumnos[i] = new Alumno(i, "Alumno" + i, 5.0);
		}

	}

	// DEfinicion y asignacion de metodos de la clase


	// MArca la habitacion recibida como parametro como ocupada
	consultarNotaMedia(n) {
		this.arrayAlumnos[n].consultarNota();
	}


	// MArca la habitacion recibida como parametro como libre
	cambiarNotaMedia(n, nuevaNota) {
		this.arrayAlumnos[n].cambiarNotaMedia(nuevaNota);
	}
}




function main() {

	// Creo un cole

	let miCole = new Colegio("Ceed", 10, 10);

	// Consulto
	miCole.consultarNotaMedia(0);
	miCole.consultarNotaMedia(2);
	miCole.cambiarNotaMedia(0, 10.0);
	miCole.cambiarNotaMedia(2, 7.5);
	miCole.consultarNotaMedia(0);
	miCole.consultarNotaMedia(2);

}

// Llamamos a la funcion principal
main();