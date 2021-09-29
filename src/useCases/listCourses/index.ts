import { CourseRepository } from '../../repositories/implementations/CourseRepository'
import { ListCoursesController } from './ListCoursesController'
import { ListCoursesUseCase } from './ListCoursesUseCase'

const courseRepository = CourseRepository.getInstance()
const listCoursesUseCase = new ListCoursesUseCase(courseRepository)
const listCoursesController = new ListCoursesController(listCoursesUseCase)

export { listCoursesController }
