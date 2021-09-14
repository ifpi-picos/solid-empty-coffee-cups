import { CreateClassController } from './createClassController'
import { CreateClassUseCase } from './createClassUseCase'

import { ClassesRepository } from '/repositories/implementations/ClassesRepository'

const classRepository = new ClassesRepository()

const createClassUseCase = new CreateClassUseCase(classRepository)

const createClassControlle = new CreateClassController(createClassUseCase)

export { createClassUseCase, createClassControlle }
