import { ClassesRepository } from '../../repositories/implementations/ClassesRepository'
import { ListClassesController } from './ListClassesController'
import { ListClassesUseCase } from './ListClassesUseCase'

const classesRepository = ClassesRepository.getInstance()
const listClassesUseCase = new ListClassesUseCase(classesRepository)
const listClassesController = new ListClassesController(listClassesUseCase)

export { listClassesController }
