import { Teachers } from '../../entities/Teachers'
import { ITeachersRepository } from '../../repositories/ITeachersRepository'

interface IRequest {
    name: string
    email: string
    siap: string
    classId: string
}

class CreateTeacherUseCase {
    constructor(private teachersRepository: ITeachersRepository) {}

    execute({ email, name, siap, classId }: IRequest): Teachers {
        // Complete aqui
    }
}

export { CreateTeacherUseCase }
