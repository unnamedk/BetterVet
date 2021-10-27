import { Service } from 'typedi'
import User from '../entity/user.entity'
import { IError } from '../interfaces/model'
type Ans = User | IError;
@Service()
export default class UserService {
  createUser = async (data: Partial<User>): Promise<Ans> => {
    const user = await User.findOne({ email: data.email })
    if (user) {
      return { message: 'User already registered with this e-mail', name: 'API User Error' }
    }

    return await User.create({ ...data }).save()
  };

  getUser = async (data: Partial<User>): Promise<Ans> => {
    const user = await User.createQueryBuilder()
      .select()
      .where('id = :id', { id: data.id })
      .orWhere('email = :email', { email: data.email })
      .getOne()

    if (!user) {
      return { message: 'User not found', name: 'API User Error' }
    }

    return user
  }
}
