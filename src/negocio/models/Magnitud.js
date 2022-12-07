export default class Magnitud {
    #magnitud

    constructor(magnitud) {
        if (!Number.isInteger(magnitud)) {
            throw new Error('el magnitud debe ser entero');
        }
        this.#magnitud = magnitud;
    }

    get magnitud() { return this.#magnitud; }

}