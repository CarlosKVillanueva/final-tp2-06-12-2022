export default class UnidadTemperatura {

    #unidad;
    static #unidadesPosibles = ["celsius", "farenheit", "kelvin"];
    static CELSIUS = new UnidadTemperatura("celsius");
    static FARENHEIT = new UnidadTemperatura("farenheit");
    static KELVIN = new UnidadTemperatura("kelvin");

    constructor(unidad) {
        UnidadTemperatura.validarUnidad(unidad);
        this.#unidad = unidad
    }

    static validarUnidad(unidad){
        if (!UnidadTemperatura.#unidadesPosibles.includes(unidad)) {
            throw new Error("Ingrese una unidad de temperatura valida");
        }
    }

    get unidad(){
        return this.#unidad
    }

}