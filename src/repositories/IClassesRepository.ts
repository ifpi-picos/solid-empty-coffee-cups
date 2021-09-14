import { Classes } from '../entities/Classes'
// import { ICreateClassDTO } from "../useCases/createClass/ICreateClassDTO";

interface IClassesRepository {
    save(clas: Classes): Promise<void>
    // create({name, turnoId, courseId, RoomId, schoolYearId, module}: ICreateClassDTO): void
    findByName(name: string): Promise<Classes>
    list(): Promise<Classes[]>
}

export { IClassesRepository }
