import { CourseRepository } from 'repositories/implementations/CourseRepository'

import { ListCoursesController } from './ListCoursesController'
import { ListCoursesUseCase } from './ListCoursesUseCase'

const courseRepository = new CourseRepository()
const listCoursesUseCase = new ListCoursesUseCase(courseRepository)
const listCourseController = new ListCoursesController(listCoursesUseCase)

export { listCourseController }
