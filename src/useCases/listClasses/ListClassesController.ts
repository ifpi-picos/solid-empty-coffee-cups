import { Request, Response } from 'express'

import { ListClassesUseCase } from './ListClassesUseCase'

class ListClassesController {
    constructor(private listClassesUseCase: ListClassesUseCase) {}
    handle(request: Request, response: Response): Response {
        const allTeachers = this.listClassesUseCase.execute()

        return response.json(allTeachers)
    }
}

export { ListClassesController }
