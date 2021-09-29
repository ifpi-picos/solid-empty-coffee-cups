import { v4 as uuid } from 'uuid'

export class Course {
    public readonly id: string

    public name: string
    public module: number
    public workload: number

    constructor(props: Omit<Course, 'id'>, id?: string) {
        Object.assign(this, props)
        if (!id) {
            this.id = uuid()
        }
    }
}
