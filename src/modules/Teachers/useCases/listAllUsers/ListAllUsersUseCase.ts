import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
    user_id: string
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        return 
    }
}

export { ListAllUsersUseCase }
