import { Teachers } from '../../entities/Teachers'
import { ICreateTeacherDTO, ITeachersRepository } from '../ITeachersRepository'

class TeachersRepository implements ITeachersRepository {
    private teachers: Teachers[]

    private static INSTANCE: TeachersRepository

    private constructor() {
        this.teachers = []
    }

    public static getInstance(): TeachersRepository {
        if (!TeachersRepository.INSTANCE) {
            TeachersRepository.INSTANCE = new TeachersRepository()
        }
        return TeachersRepository.INSTANCE
    }

    create({ name, email, siap, classId }: ICreateTeacherDTO): void {
        const teacher = new Teachers()

        Object.assign(teacher, {
            name,
            email,
            siap,
            classId,
        })

        this.teachers.push(teacher)
    }

    list(): Teachers[] {
        return this.teachers
    }

    findBySiap(siap: string): Teachers {
        const teacher = this.teachers.find((teacher) => teacher.siap === siap)
        return teacher
    }
}

export { TeachersRepository }
