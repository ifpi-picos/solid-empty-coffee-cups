import { Router } from 'express'

import { createTeacherController } from '../useCases/createTeacher'
import { listTeachersController } from '../useCases/listTeachers'

const teachersRoutes = Router()

teachersRoutes.post('/', (request, response) => createTeacherController.handle(request, response))

teachersRoutes.get('/', (request, response) => listTeachersController.handle(request, response))

export { teachersRoutes }
