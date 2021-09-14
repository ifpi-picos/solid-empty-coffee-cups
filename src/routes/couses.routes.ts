import { Router } from 'express'

import { createCourseController } from 'modules/Teachers/useCases/createCourse'
import { listCoursesController } from 'modules/Teachers/useCases/listCourses/ListCoursesController'

const coursesRoutes = Router()

coursesRoutes.post('/', (request, response) => createCourseController.handle(request, response))

coursesRoutes.get('/', (request, response) => listCoursesController.handle(request, response))

export { coursesRoutes }
