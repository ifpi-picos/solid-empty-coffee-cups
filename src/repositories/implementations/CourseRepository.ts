import { Course } from '../../entities/Course'
import { ICourseRepository } from '../ICourseRepository'

export class CourseRepository implements ICourseRepository {
    private courses: Course[]

    private constructor() {
        this.courses = []
    }

    private static INSTANCE: CourseRepository

    public static getInstance(): CourseRepository {
        if (!CourseRepository.INSTANCE) {
            CourseRepository.INSTANCE = new CourseRepository()
        }
        return CourseRepository.INSTANCE
    }

    async findByName(name: string): Promise<Course> {
        const course = this.courses.find((course) => course.name === name)
        return course
    }

    async save(course: Course): Promise<void> {
        this.courses.push(course)
    }

    async list(): Promise<Course[]> {
        return this.courses
    }
}
