import HistorialTemperaturas from './HistorialTemperaturas'
import { MODO } from '../config/config.js'

let registro

if (MODO === 'memoria') {
    registro = new HistorialTemperaturas()
}

export default registro