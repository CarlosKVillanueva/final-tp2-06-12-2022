import historialTemp from '../negocio/historialTemperaturas/HistorialFactory'
import Sistema from '../negocio/Sistema'
import notificadorFactory from "../negocio/Notificador/NotificadorFactory";

const sistema = new Sistema(notificadorFactory,historialTemp)

export async function controladorPostTemp(req, res, next) {
    try {
        const temperaturaCreada = await sistema.cargarTemperatura(req.body)
        res.status(201).json(temperaturaCreada)
    } catch (error) {
        next(error)
    }
}

export async function controladorGetTemperaturasMinMax(req, res, next) {
    try {
        const min = req.query.min;
        const max = req.query.max;

        const reporteDiversidad = await sistema.obtenerTemperaturasEnRango(min, max)
        res.json(reporteDiversidad)
    } catch (error) {
        next(error)
    }
}