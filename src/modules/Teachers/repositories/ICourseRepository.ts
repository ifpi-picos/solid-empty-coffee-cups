import { Course } from '../entities/Course'

export interface ICourseRepository {
    findByName(name: string): Promise<Course>
    save(course: Course): Promise<void>
}
