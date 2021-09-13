import { uuid } from "uuidv4"

class Classes{
    public readonly id: string

    public name: string
    public turnoId: number
    public courseId: number
    public RoomId: number
    public schoolYearId: number
    public module: number

    constructor(props:Omit<'Classes', 'id'>, id?: string){
        Object.assign(this, props)
        
        if(!id){
            this.id = uuid()
        }
    }

}

export {Classes}