import { Course } from "modules/Teachers/entities/Course";
import { ICourseRepository } from "../ICourseRepository";

export class CourseRepository implements ICourseRepository{
    private courses: Course[] = []

    async findByName(name: string): Promise<Course>{
        const course = this.courses.find(course => course.name === name)
        
        return course    
    }

    async save(course: Course): Promise<void>{
        this.courses.push(course)
    }

    async list():Promise<Course[]>{
        return this.courses
    }
}