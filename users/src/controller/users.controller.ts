import { NextFunction, Request, Response } from "express";
import { UsersDto } from "../domain/DTO/users/users.dto";
import UsersHandler from "../application/users/UsersHandler.application";

export default class UsersController {
  private usersHandler: UsersHandler;

  constructor(userHandler: UsersHandler) {
    this.usersHandler = userHandler;
  }
  public async getUsers(req: Request, res: Response, next: NextFunction){
      console.log("hello")
      const users = await this.usersHandler.getUsers();
      const usersDto = users.map((el)=> new UsersDto(el.usr_id, el.usr_email, el.usr_password, el.usr_updatedAt, el.usr_createdAt));
      res.json(usersDto);
      next();
  }
}
