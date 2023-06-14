import {UsersEntity} from "../../infrastructure/Entity/users.entity";
import {IUserRepository} from "./IUserRepository";

export default class UsersHandler {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async getUsers() {
    return await this.userRepository.getUsers();
  }
}
