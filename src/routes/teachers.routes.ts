import { Router } from 'express'

import { createTeacherController } from '../modules/teachers/useCases/createTeacher'
import { listTeachersController } from '../modules/teachers/useCases/listTeachers'

const teachersRoutes = Router()

teachersRoutes.post('/', (request, response) => createTeacherController.handle(request, response))

teachersRoutes.get('/', (request, response) => listTeachersController.handle(request, response))

export { teachersRoutes }
