import { getRepository, Repository, Not } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private oremRepository: Repository<User>;

  constructor() {
    this.oremRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.oremRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.oremRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async findAllProviders({
    except_user_id,
  }: IFindAllProvidersDTO): Promise<User[]> {
    let users: User[];

    if (except_user_id) {
      users = await this.oremRepository.find({
        where: {
          id: Not(except_user_id),
        },
      });
    } else {
      users = await this.oremRepository.find();
    }

    return users;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.oremRepository.create(userData);

    await this.oremRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.oremRepository.save(user);
  }
}

export default UsersRepository;
