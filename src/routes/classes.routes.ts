import { Router } from 'express'
import { createClassController } from 'useCases/createClass'

const ClassesRoutes = Router()

ClassesRoutes.post('/', (request, response) => createClassController.handle(request, response))

export { ClassesRoutes }
