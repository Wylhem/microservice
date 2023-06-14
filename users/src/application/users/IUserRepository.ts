import { UsersEntity } from "../../infrastructure/Entity/users.entity";

export interface IUserRepository {
  getUsers(): Promise<Array<UsersEntity>>;
}
