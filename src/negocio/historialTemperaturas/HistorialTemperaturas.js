export default class HistorialTemperaturas {
    #temperaturas

    constructor() {
        this.#temperaturas = []
    }

    listarTemperaturas() {
        return this.#temperaturas;
    }

    listadoMinMax(min, max) {
        return this.#temperaturas.filter(t => t.unidad.unidadTemperatura >= min && t.unidadTemperatura <= max)
    }

};