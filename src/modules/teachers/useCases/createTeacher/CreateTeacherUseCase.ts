import { ITeachersRepository } from '../../repositories/ITeachersRepository'

interface IRequest {
    name: string
    email: string
    siap: string
    classId: string
}

class CreateTeacherUseCase {
    constructor(private teachersRepository: ITeachersRepository) { }

    execute({ email, name, siap, classId }: IRequest): void {
        const teacherAlreadyExists = this.teachersRepository.findBySiap(siap)
        if (teacherAlreadyExists) {
            throw new Error('Teacher Already exists!')
        }
        this.teachersRepository.create({ email, name, siap, classId })
    }
}

export { CreateTeacherUseCase }
