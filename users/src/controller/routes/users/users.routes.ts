import { Router } from "express";
import UserContoller from "../../users/users.controller";
export function usersRoutes(
  router: Router,
  usersController: UserContoller
): void {
  router.get("/users");
}
