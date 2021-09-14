import { Response, Request } from 'express'

import { CreateCourseUseCase } from './CreateCourseUseCase'

class CreateTeacherController {
    constructor(private createCourseUseCase: CreateCourseUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, module, workload } = request.body

        this.createCourseUseCase.execute({ name, module, workload })

        return response.status(201).send()
    }
}

export { CreateTeacherController }
