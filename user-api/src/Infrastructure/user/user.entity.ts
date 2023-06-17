import { Users } from '@prisma/client';
import { User } from '../../Domain/User/user.type';

export class UserEntity implements Users {
  usr_id: number;
  usr_email: string;
  usr_password: string;
  usr_updatedAt: Date;
  usr_createdAt: Date;
  usr_profile: number;

  public static Mapper(userEntity: UserEntity): Partial<User> {
    return {
      id: userEntity.usr_id,
      email: userEntity.usr_email,
      updatedAt: userEntity.usr_updatedAt,
      createdAt: userEntity.usr_createdAt,
    };
  }
}
