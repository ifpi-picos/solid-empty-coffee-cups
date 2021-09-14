import { Request, Response } from 'express'
import { ListTeachersUseCase } from './ListTeachersUseCase'


class ListTeachersController {
    constructor(private listTeachersUseCase: ListTeachersUseCase) { }
    handle(request: Request, response: Response): Response {
        const allTeachers = this.listTeachersUseCase.execute()

        return response.json(allTeachers)
    }
}

export { ListTeachersController }
