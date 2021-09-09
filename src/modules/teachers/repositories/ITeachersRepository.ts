import { Teachers } from '../entities/Teachers'

interface ICreateTeacherDTO {
    name: string
    email: string
    siap: string
    classId: string
}

interface ITeachersRepository {
    findBySiap(siap: string): Teachers
    list(): Teachers[]
    create({ name, email, siap, classId }: ICreateTeacherDTO): void
    // findById(id: string): User | undefined
    // findByEmail(email: string): User | undefined
    // turnAdmin(user: User): User
}

export { ITeachersRepository, ICreateTeacherDTO }
