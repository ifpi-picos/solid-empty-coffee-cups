import { Request, Response } from 'express'

import { ListCoursesUseCase } from './ListCoursesUseCase'

class ListCoursesController {
    constructor(private listCoursesUseCase: ListCoursesUseCase) {}
    handle(request: Request, response: Response): Response {
        const allCourses = this.listCoursesUseCase.execute()
        return response.json(allCourses)
    }
}

export { ListCoursesController }
