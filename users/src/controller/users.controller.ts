import { NextFunction, Request, Response } from "express";
import { UsersDto } from "../domain/DTO/users/users.dto";
import UsersHandler from "../application/users/UsersHandler.application";

export default class UsersController {
  private usersHandler: UsersHandler;

  constructor(userHandler: UsersHandler) {
    this.usersHandler = userHandler;
  }
  public async getUsers(req: Request, res: Response, next: NextFunction){
    try{
      console.log("hello")
      const users = await this.usersHandler.getUsers();
      res.send( users.map((el) => {
        return new UsersDto(
          el.usr_id,
          el.usr_email,
          el.usr_password,
          el.usr_updatedAt,
          el.usr_createdAt
        );
      }));
    } catch (e) {}
  }
}
