import { v4 as uuid } from 'uuid'

class Teachers {
    public readonly id?: string
    public name: string
    public email: string
    public siap: string
    public classId: string

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Teachers }
