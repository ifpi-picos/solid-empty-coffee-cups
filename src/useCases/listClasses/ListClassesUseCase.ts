import { Classes } from '../../entities/Classes'
import { IClassesRepository } from '../../repositories/IClassesRepository'

class ListClassesUseCase {
    constructor(private classesRepository: IClassesRepository) {}

    execute(): Promise<Classes[]> {
        const classes = this.classesRepository.list()
        return classes
    }
}

export { ListClassesUseCase }
