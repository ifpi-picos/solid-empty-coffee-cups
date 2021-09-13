import { Course } from 'modules/teachers/entities/Course';
import {ICourseRepository} from '../../repositories/ICourseRepository'
import { ICreateCourseRequestDTO } from './ICreateCourseDTO';

export class CreateCourseUseCase{
    constructor(private courseRepository: ICourseRepository){

    }

    async execute(data: ICreateCourseRequestDTO){
        const CourseAlredyExist = this.courseRepository.findByName(data.name)

        if(CourseAlredyExist){
            throw new Error('Course Alredy Exist!!!')
        }
        
        const course = new Course(data)

        await this.courseRepository.save(course)
    } 

}