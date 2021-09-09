import { Teachers } from '../entities/Teachers'

interface ICreateTeacherDTO {
    name: string
    email: string
    siap: string
    classId: string
}

interface ITeachersRepository {
    create({ name, email, siap, classId }: ICreateTeacherDTO): Teachers
    // findById(id: string): User | undefined
    // findByEmail(email: string): User | undefined
    // turnAdmin(user: User): User
    // list(): User[]
}

export { ITeachersRepository, ICreateTeacherDTO }
