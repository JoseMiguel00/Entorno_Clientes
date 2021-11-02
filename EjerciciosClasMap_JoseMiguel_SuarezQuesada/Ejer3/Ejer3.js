
"use strict";



class Hospital {
    constructor(nombre, ciudad, nPacientes) {
     
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.pacientes = new Array();

       
        for (let i = 0; i < nPacientes; i++) {
            this.pacientes[i] = new Paciente(i, "Paciente" + i, "Constipado");
        }
    }

 
    eliminarPaciente(n) {
        // Eliminamos el paciente de la posicion n
        this.pacientes.splice(n, 1);
    }




   
    imprimirPacientes() {
        for (let i = 0; i < this.pacientes.length; i++) {
            alert(this.pacientes[i].nombre);

        }
    }




}



class Paciente {
    constructor(codigo, nombre, enfermedad) {
        // Atributos del vuelo
        this.codigo = codigo;
        this.nombre = nombre;
        this.enfermedad = enfermedad;
    }

 
}

let miHospi = new Hospital("CEED", "Valencia", 10);
miHospi.imprimirPacientes();
miHospi.eliminarPaciente(0);
miHospi.imprimirPacientes();
miHospi.eliminarPaciente(0);
miHospi.imprimirPacientes();
miHospi.eliminarPaciente(0);


