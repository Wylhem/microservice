import express, { Express } from "express";
import { UserRepository } from "../infrastructure/repository/users.repository";
import UsersHandler from "../application/users/UsersHandler.application";
import { usersRoutes } from "./routes/users.routes";
import UserController from "./users.controller";

export function initApp(): Express {
  const app: Express = express();

  const userRepository = new UserRepository();
  const userHandler = new UsersHandler(userRepository);
  const userController = new UserController(userHandler);

  usersRoutes(app, userController);

  return app;
}
