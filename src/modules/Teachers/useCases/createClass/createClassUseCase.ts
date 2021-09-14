import { Classes } from "modules/Teachers/entities/Classes";
import { IClassesRepository } from "modules/Teachers/repositories/IClassesRepository";
import { ClassesRepository } from "modules/Teachers/repositories/implementations/ClassesRepository";
import { ICreateClassRequestDTO } from "./ICreateClassDTO";

export class CreateClassUseCase{
    constructor(private classRepository: IClassesRepository){}

    async execute(data: ICreateClassRequestDTO){
        const ClassAlredyExists = this.classRepository.findByName(data.name)

        if(ClassAlredyExists){
            throw new Error('Class Alredy exists!!!')
        }

        const clas = new Classes(data)
        await this.classRepository.save(clas)
    }
}