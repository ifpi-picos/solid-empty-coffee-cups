import { Router } from 'express'
import { createTeacherController } from 'useCases/createTeacher'

const teachersRoutes = Router()

teachersRoutes.post('/', (request, response) => createTeacherController.handle(request, response))

export { teachersRoutes }
