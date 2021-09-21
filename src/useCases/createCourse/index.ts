import { CourseRepository } from '../../repositories/implementations/CourseRepository'
import { CreateCourseController } from './CreateCourseController'
import { CreateCourseUseCase } from './CreateCourseUseCase'

const courseRepository = CourseRepository.getInstance()

const createCourseUseCase = new CreateCourseUseCase(courseRepository)

const createCourseController = new CreateCourseController(createCourseUseCase)

export { createCourseUseCase, createCourseController }
