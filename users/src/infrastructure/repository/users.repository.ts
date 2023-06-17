import {prisma} from "../../prisma";
import {IUserRepository} from "../../application/users/IUserRepository";
import {UsersEntity} from "../Entity/users.entity";

export class UserRepository implements IUserRepository {
  async getUsers(): Promise<UsersEntity[]> {
    return await prisma.users.findMany({});
  }
}
