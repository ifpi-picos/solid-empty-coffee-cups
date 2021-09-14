import { Course } from "modules/Teachers/entities/Course";
import { ICourseRepository } from "modules/Teachers/repositories/ICourseRepository";

class ListCoursesUseCase{
    constructor(private courseRepository: ICourseRepository){}
        execute(): Promise<Course[]>{
            const courses = this.courseRepository.list()
            return courses
        }
    }

export { ListCoursesUseCase }