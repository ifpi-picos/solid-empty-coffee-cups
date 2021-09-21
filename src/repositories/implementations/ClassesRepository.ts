import { Classes } from '../../entities/Classes'
import { IClassesRepository } from '../IClassesRepository'

export class ClassesRepository implements IClassesRepository {
    private classes: Classes[]

    private constructor() {
        this.classes = []
    }

    private static INSTANCE: ClassesRepository

    public static getInstance(): ClassesRepository {
        if (!ClassesRepository.INSTANCE) {
            ClassesRepository.INSTANCE = new ClassesRepository()
        }
        return ClassesRepository.INSTANCE
    }

    async findByName(name: string): Promise<Classes> {
        const clas = this.classes.find((clas) => clas.name === name)
        return clas
    }
    async save(clas: Classes): Promise<void> {
        this.classes.push(clas)
    }
    async list(): Promise<Classes[]> {
        return this.classes
    }
}
