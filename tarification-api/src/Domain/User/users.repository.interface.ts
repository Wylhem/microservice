import { UsersModel } from './models/user.model';

export interface UsersRepositoryInterface {
  getAll(): Promise<Array<UsersModel>>;

  getOne(userId: number): Promise<UsersModel>;

  create(user: Partial<UsersModel>): Promise<UsersModel>;

  updateEmail(userId: number, user: Partial<UsersModel>): Promise<UsersModel>;
}
export const UsersRepositoryInterface = Symbol('UsersRepositoryInterface');
