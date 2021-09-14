import { CourseRepository } from "modules/Teachers/repositories/implementations/CourseRepository";
import { CreateCourseController } from "./CreateCourseController";
import { CreateCourseUseCase } from "./CreateCourseUseCase";

const courseRepository = new CourseRepository()

const createCourseUseCase = new CreateCourseUseCase(
    courseRepository
)

const createCourseController = new CreateCourseController(
    createCourseUseCase
)

export{ createCourseUseCase, createCourseController}