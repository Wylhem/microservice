import { Router } from "express";
import UserContoller from "../users.controller";
export function usersRoutes(
  router: Router,
  usersController: UserContoller
): void {
  router.get("/users", usersController.getUsers);

  
}
