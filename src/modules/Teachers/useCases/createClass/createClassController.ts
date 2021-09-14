import { Request, Response } from 'express'
import { CreateClassUseCase } from './createClassUseCase'

class CreateClassController {
    constructor (private createClassUseClass: CreateClassUseCase) {}

    handle (request: Request, response: Response): Response {
        const { name, turnoId, courseId, RoomId, schoolYearId, module } = request.body

        this.createClassUseClass.execute({name, turnoId, courseId, RoomId, schoolYearId, module })

        return response.status(201).send()
    }
}

export{ CreateClassController}