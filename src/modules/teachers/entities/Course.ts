import {uuid} from 'uuidv4'

export class Course{
    public readonly id: string

    public name: string
    public module: number
    public workload: number
    public cordinationId: number
    public nivelId: number

    constructor(props: Omit<Course, 'id'>, id?:string){
        Object.assign(this, props)
        if(!id){
            this.id = uuid()
        }
    }
}

