import { response } from "express";
import UsersHandler from "../../application/users/UsersHandler.application";

export default class UserContoller {
  private usersHandler: UsersHandler;

  constructor(userHandler: UsersHandler) {
    this.usersHandler = userHandler;
  }

  public async getUsers(req: Request, res: Response) {
    try {
    } catch (e) {}
  }
}
