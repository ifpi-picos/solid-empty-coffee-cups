import { TeachersRepository } from '../../repositories/implementations/TeachersRepository'
import { CreateTeacherController } from './createTeacherController'
import { CreateTeacherUseCase } from './createTeacherUseCase'

const teachersRepository = TeachersRepository.getInstance()
const createTeacherUseCase = new CreateTeacherUseCase(teachersRepository)
const createTeacherController = new CreateTeacherController(createTeacherUseCase)

export { createTeacherController }
