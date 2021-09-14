import { ITeachersRepository } from '../../repositories/ITeachersRepository'
import { ICreateTeacherDTO } from './ICreateTeacherDTO'

class CreateTeacherUseCase {
    constructor(private teachersRepository: ITeachersRepository) {}

    execute({ email, name, siap, classId }: ICreateTeacherDTO): void {
        const teacherAlreadyExists = this.teachersRepository.findBySiap(siap)
        if (teacherAlreadyExists) {
            throw new Error('Teacher Already exists!')
        }
        this.teachersRepository.create({ email, name, siap, classId })
    }
}

export { CreateTeacherUseCase }
