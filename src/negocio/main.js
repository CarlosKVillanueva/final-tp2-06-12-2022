import Sistema from './Sistema.js'
import historialTemp from './historialTemperaturas/HistorialFactory'
import notificador from './Notificador/NotificadorFactory'

const sistema = new Sistema(notificador, historialTemp)