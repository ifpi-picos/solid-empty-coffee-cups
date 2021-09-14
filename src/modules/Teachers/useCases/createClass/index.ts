import { ClassesRepository } from "modules/Teachers/repositories/implementations/ClassesRepository";
import { CreateClassController } from "./createClassController";
import { CreateClassUseCase } from "./createClassUseCase";

const classRepository = new ClassesRepository()

const createClassUseCase = new CreateClassUseCase(classRepository)

const createClassControlle = new CreateClassController(createClassUseCase)

export {createClassUseCase, createClassControlle}