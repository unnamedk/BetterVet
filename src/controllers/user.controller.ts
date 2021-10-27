import { Service } from 'typedi'
import UserService from '../services/user.service'

@Service()
export default class UserController {
  constructor (private readonly userService: UserService) {}

  // createUser = async (req: Request, res: Response): Promise<User> => {
  // };
}
