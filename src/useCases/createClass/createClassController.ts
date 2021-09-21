import { Request, Response } from 'express'

import { CreateClassUseCase } from './createClassUseCase'

class CreateClassController {
    constructor(private createClassUseClass: CreateClassUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, courseId, module } = request.body

        this.createClassUseClass.execute({ name, courseId, module })

        return response.status(201).send()
    }
}

export { CreateClassController }
