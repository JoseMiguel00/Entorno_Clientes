// Usamos el modo estricto
"use strict";

// Definimos la clase aeropuerto

class Aeropuerto {
    constructor(nombre, ciudad, nVuelos) {
        // Atributos clase aerpuerto
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.vuelos = new Array();
        // Inicializamos vuelos
        for (let i = 0; i < nVuelos; i++) {
            this.vuelos[i] = new Vuelo(i, "11:00", "12:00");
        }

    }
    // cambia hora llegada
    cambiarHoraLLegada(n, nuevaHora) {
        this.vuelos[n].cambiarHoraLLegada(nuevaHora);
    }

    // cambia hora salida
    cambiarHoraSalida(n, nuevaHora) {
        this.vuelos[n].cambiarHoraSalida(nuevaHora);
    }




    // Comprueba si llegada posterior a salida
    compruebaLLegadaMayorSalida(n) {
        alert(this.vuelos[n].compruebaLLegadaMayorSalida());
    }



}

// Definimos la clase vuelo


// Formato horas HH:MM

class Vuelo {
    constructor(codigo, horaSalida, horaLLegada) {
        // Atributos del vuelo
        this.codigo = codigo;
        this.horaSalida = horaSalida;
        this.horaLLegada = horaLLegada;

    }
    // cambia hora llegada
    cambiarHoraLLegada(nuevaHora) {
        this.horaLLegada = nuevaHora;
    }


    // cambia hora salida
    cambiarHoraSalida(nuevaHora) {
        this.horaSalida = nuevaHora;
    }

    // Comprueba si llegada posterior a salida
    compruebaLLegadaMayorSalida() {
        let lleg = this.horaLLegada.split(":");
        let sal = this.horaSalida.split(":");

        let hhlleg = parseInt(lleg[0]);
        let mmlleg = parseInt(lleg[1]);

        let hhsal = parseInt(sal[0]);
        let mmsal = parseInt(sal[1]);
        // alert("hhsal "+hhsal+ " hhlleg "+hhlleg);

        if (hhlleg > hhsal) {
            return true;
        }
        else if (hhlleg < hhsal) {
            return false;
        }
        else {

            return mmlleg > mmsal;

            /* Lo resolvemos con un simple return 
            if(mmlleg>mmsal){
                return true;
            }
            else{
                return false;
            }
            */
        }
    }


}

// Creo un cole

var miAeropuerto = new Aeropuerto("CEED", "Valencia", 10);
miAeropuerto.compruebaLLegadaMayorSalida(1);
miAeropuerto.cambiarHoraSalida(1, "13:00");
miAeropuerto.compruebaLLegadaMayorSalida(1);
miAeropuerto.cambiarHoraLLegada(1, "14:00");
miAeropuerto.compruebaLLegadaMayorSalida(1);



