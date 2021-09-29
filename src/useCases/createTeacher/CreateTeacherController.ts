import { Response, Request } from 'express'

import { CreateTeacherUseCase } from './CreateTeacherUseCase'

class CreateTeacherController {
    constructor(private createTeacherUseCase: CreateTeacherUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, email, siap, classId } = request.body

        this.createTeacherUseCase.execute({ email, name, siap, classId })

        return response.status(201).send()
    }
}

export { CreateTeacherController }
