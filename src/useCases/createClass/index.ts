import { ClassesRepository } from 'repositories/implementations/ClassesRepository'

import { CreateClassController } from './createClassController'
import { CreateClassUseCase } from './createClassUseCase'

const classRepository = new ClassesRepository()

const createClassUseCase = new CreateClassUseCase(classRepository)

const createClassController = new CreateClassController(createClassUseCase)

export { createClassUseCase, createClassController }
