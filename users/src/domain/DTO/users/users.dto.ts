import { UsersEntity } from "../../../infrastructure/Entity/users.entity";

export class UsersDto {
  constructor(
    public id: Number,
    public email: string,
    public password: string,
    public updatedAt: Date,
    public createdAt: Date
  ) {}
}
