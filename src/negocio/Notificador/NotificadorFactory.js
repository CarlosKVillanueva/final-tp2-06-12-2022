import Notificador from './Notificador';
import { MODO } from '../config/config.js';

let notificador

if (MODO === 'memoria') {
    notificador = new Notificador()
}

export default notificador