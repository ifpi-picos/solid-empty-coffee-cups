import { Response, Request } from 'express'

import { CreateTeacherUseCase } from './createTeacherUseCase'

class CreateTeacherController {
    constructor(private createTeacherUseCase: CreateTeacherUseCase) {}

    handle(request: Request, response: Response): Response {
        // Complete aqui
    }
}

export { CreateTeacherController }
