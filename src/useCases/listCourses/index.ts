import { CourseRepository } from '../../repositories/implementations/CourseRepository'
import { ListCoursesController } from './ListCoursesController'
import { ListCoursesUseCase } from './ListCoursesUseCase'

const courseRepository = new CourseRepository()
const listCoursesUseCase = new ListCoursesUseCase(courseRepository)
const listCoursesController = new ListCoursesController(listCoursesUseCase)

export { listCoursesController }
