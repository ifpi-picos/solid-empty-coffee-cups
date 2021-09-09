import { TeachersRepository } from '../../repositories/implementations/TeachersRepository'
import { ListTeachersController } from './ListTeachersController'
import { ListTeachersUseCase } from './ListTeachersUseCase'

const teachersRepository = TeachersRepository.getInstance()
const listTeachersUseCase = new ListTeachersUseCase(teachersRepository)
const listTeachersController = new ListTeachersController(listTeachersUseCase)

export { listTeachersController }
