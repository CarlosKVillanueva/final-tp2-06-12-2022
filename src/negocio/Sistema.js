import Temperatura from '/models/Temperatura'
export default class Sistema {
    #historial
    #notificador

    constructor(notificador, historial) {
        this.#historial = historial
        this.#notificador = notificador

    }

    cargarTemperatura({magnitud, unidadTemperatura}) {

        if ((unidadTemperatura === 'kelvin' && magnitud < 0) ||(unidadTemperatura === 'celsius' && magnitud < -273) || (unidadTemperatura === 'farenheit' && magnitud < -460)  ) {
            this.#notificador.notificadorMail({magnitud,unidadTemperatura})
        }
        const temp = new Temperatura({magnitud,unidadTemperatura})
        this.#historial.push(new Temperatura(temp.asDto()));

        return temp;
    }

    obtenerTemperaturasEnRango(min, max) {
        return this.#historial.listadoMinMax(min, max);
    }
}