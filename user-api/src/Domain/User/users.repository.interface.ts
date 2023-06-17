import { User } from './user.type';

export interface UsersRepositoryInterface {
  getAll(): Promise<Array<Partial<User>>>;
}
export const UsersRepositoryInterface = Symbol('UsersRepositoryInterface');
