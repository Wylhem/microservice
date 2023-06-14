import { prisma } from "../../prisma";
import { IUserRepository } from "../../application/users/IUserRepository";
import { UsersEntity } from "../Entity/users.entity";

export class UserRepository implements IUserRepository {
  async getUsers(): Promise<UsersEntity[]> {
    const users = await prisma.users.findMany({});
    return users;
    throw new Error("Method not implemented.");
  }
}
