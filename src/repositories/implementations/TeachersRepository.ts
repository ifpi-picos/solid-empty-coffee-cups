import { Teachers } from 'entities/Teachers'
import { ICreateTeacherDTO, ITeachersRepository } from 'repositories/ITeachersRepository'

class TeachersRepository implements ITeachersRepository {
    create({ name, email, siap, classId }: ICreateTeacherDTO): Teachers {
        throw new Error('Method not implemented.')
    }
}

export { TeachersRepository }
