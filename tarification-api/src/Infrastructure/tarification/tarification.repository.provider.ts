import { Provider } from '@nestjs/common';
import { UserRepository } from './tarification.repository';
import { UsersRepositoryInterface } from '../../Domain/User/users.repository.interface';
export const UserRepositoryProvider: Provider = {
  provide: UsersRepositoryInterface,
  useClass: UserRepository,
};
