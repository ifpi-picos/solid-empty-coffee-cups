import { Router } from 'express'
import { createUserController } from 'modules/teachers/useCases/createUser'
import { listAllUsersController } from 'modules/teachers/useCases/listAllUsers'

const usersRoutes = Router()

usersRoutes.post('/', (request, response) => createUserController.handle(request, response))

usersRoutes.get('/', (request, response) => listAllUsersController.handle(request, response))

export { usersRoutes }
