import { CourseRepository } from "modules/Teachers/repositories/implementations/CourseRepository";
import { ListCoursesUseCase } from "./ListCoursesUseCase";
import {ListCoursesController} from "./ListCoursesController"
const courseRepository = new CourseRepository()
const listCoursesUseCase = new ListCoursesUseCase(courseRepository)
const listCourseController = new ListCoursesController(listCoursesUseCase)