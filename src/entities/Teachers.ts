import { v4 as uuid } from 'uuid'

export class Teachers {
    public readonly id: string

    public name: string
    public email: string
    public siap: string
    public classId: string

    constructor(props: Omit<Teachers, 'id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
}
