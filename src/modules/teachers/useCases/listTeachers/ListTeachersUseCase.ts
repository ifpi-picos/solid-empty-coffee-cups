import { Teachers } from '../../entities/Teachers'
import { ITeachersRepository } from '../../repositories/ITeachersRepository'

class ListTeachersUseCase {
    constructor(private teachersRepository: ITeachersRepository) { }

    execute(): Teachers[] {
        const teachers = this.teachersRepository.list()
        return teachers
    }
}

export { ListTeachersUseCase }
