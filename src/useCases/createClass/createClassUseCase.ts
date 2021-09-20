import { IClassesRepository } from 'repositories/IClassesRepository'

import { Classes } from '../../entities/Classes'
import { ICreateClassRequestDTO } from './ICreateClassDTO'

export class CreateClassUseCase {
    constructor(private classRepository: IClassesRepository) {}

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async execute(data: ICreateClassRequestDTO) {
        const ClassAlredyExists = this.classRepository.findByName(data.name)

        if (ClassAlredyExists) {
            throw new Error('Class Alredy exists!!!')
        }

        const clas = new Classes(data)
        await this.classRepository.save(clas)
    }
}
