import { ClassesRepository } from '../../repositories/implementations/ClassesRepository'
import { CreateClassController } from './createClassController'
import { CreateClassUseCase } from './createClassUseCase'

const classRepository = ClassesRepository.getInstance()

const createClassUseCase = new CreateClassUseCase(classRepository)

const createClassController = new CreateClassController(createClassUseCase)

export { createClassUseCase, createClassController }
