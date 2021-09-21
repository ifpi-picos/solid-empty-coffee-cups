import { Router } from 'express'

import { createClassController } from '../useCases/createClass'
import { listClassesController } from '../useCases/listClasses'

const classesRoutes = Router()

classesRoutes.post('/', (request, response) => createClassController.handle(request, response))
classesRoutes.get('/', (request, response) => listClassesController.handle(request, response))

export { classesRoutes }
