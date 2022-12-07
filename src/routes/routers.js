import { Router } from 'express'
import { controladorPostTemp, controladorGetTemperaturasMinMax } from './controladorPostTemp'

const routers = new Router()

routers.post('/', controladorPostTemp)
routers.get('/', controladorGetTemperaturasMinMax)
export default routers