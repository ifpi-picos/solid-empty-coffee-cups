import { Router } from 'express'

import { createClassController } from '../useCases/createClass'

const classesRoutes = Router()

classesRoutes.post('/', (request, response) => createClassController.handle(request, response))

export { classesRoutes }
