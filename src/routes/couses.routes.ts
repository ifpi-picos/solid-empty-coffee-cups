import { Router } from 'express'

import { createCourseController } from '../useCases/createCourse'
import { listCoursesController } from '../useCases/listCourses'

const coursesRoutes = Router()

coursesRoutes.post('/', (request, response) => createCourseController.handle(request, response))

coursesRoutes.get('/', (request, response) => listCoursesController.handle(request, response))

export { coursesRoutes }
