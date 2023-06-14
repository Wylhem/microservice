import { Users } from "@prisma/client";

export class UsersEntity implements Users {
  usr_id: number;
  usr_email: string;
  usr_password: string;
  usr_updatedAt: Date;
  usr_createdAt: Date;
  usr_profile: number;
}
