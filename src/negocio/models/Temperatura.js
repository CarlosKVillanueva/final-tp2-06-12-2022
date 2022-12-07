import UnidadTemperatura from "src/negocio/models/UnidadTemperatura";



export default class Temperatura {
    #magnitud
    #unidadTemperatura

    constructor({magnitud, unidadTemperatura}) {
        this.magnitud = magnitud;
        this.unidadTemperatura = unidadTemperatura;
    }


    get magnitud() {
        return this.#magnitud;
    }

    set magnitud(value) {
        this.#magnitud = value;
    }

    get unidadTemperatura() {
        return this.#unidadTemperatura;
    }

    set unidadTemperatura(value) {
        this.#unidadTemperatura = value;
    }

    asDto() {
        return Object.freeze({
            magnitud: this.#magnitud,
            unidadTemperatura: this.#unidadTemperatura
        })
    }
}