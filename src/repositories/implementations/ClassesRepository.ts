import { Classes } from 'entities/Classes'

import { IClassesRepository } from '../IClassesRepository'

export class ClassesRepository implements IClassesRepository {
    private classes: Classes[] = []

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
