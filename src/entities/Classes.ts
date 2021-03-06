import { v4 as uuid } from 'uuid'

class Classes {
    public readonly id: string

    public name: string
    public courseId: number
    public module: number

    constructor(props: Omit<Classes, 'id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
}

export { Classes }
