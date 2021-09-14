import { Router } from 'express'

import { createTeacherController } from '../modules/Teachers/useCases/createCourse/'
import { listTeachersController } from '../modules/Teachers/useCases/listTeachers'

const teachersRoutes = Router()

teachersRoutes.post('/', (request, response) => createTeacherController.handle(request, response))

teachersRoutes.get('/', (request, response) => listTeachersController.handle(request, response))

export { teachersRoutes }
