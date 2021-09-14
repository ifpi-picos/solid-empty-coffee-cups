import { TeachersRepository } from '../../repositories/implementations/TeachersRepository'
import { CreateTeacherController } from './CreateTeacherController'
import { CreateTeacherUseCase } from './CreateTeacherUseCase'

const teachersRepository = TeachersRepository.getInstance()
const createTeacherUseCase = new CreateTeacherUseCase(teachersRepository)
const createTeacherController = new CreateTeacherController(createTeacherUseCase)

export { createTeacherController }
