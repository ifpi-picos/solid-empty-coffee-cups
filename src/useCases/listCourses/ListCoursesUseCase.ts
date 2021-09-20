import { Course } from '../../entities/Course'
import { ICourseRepository } from '../../repositories/ICourseRepository'

class ListCoursesUseCase {
    constructor(private courseRepository: ICourseRepository) {}
    execute(): Promise<Course[]> {
        const courses = this.courseRepository.list()
        return courses
    }
}

export { ListCoursesUseCase }
