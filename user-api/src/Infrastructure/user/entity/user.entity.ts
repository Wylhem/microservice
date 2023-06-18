import { Users } from '@prisma/client';
import { UsersModel } from '../../../Domain/User/models/user.model';
import { ProfileEntity } from '../../profile/entity/profile.entity';

export class UserEntity implements Users {
  usr_id: number;
  usr_email: string;
  usr_password: string;
  usr_updatedAt: Date;
  usr_createdAt: Date;
  usr_profile: number;

  profile?: ProfileEntity;

  public static MapperToDomain(userEntity: UserEntity): UsersModel {
    return {
      id: userEntity.usr_id,
      email: userEntity.usr_email,
      password: userEntity.usr_password,
      updatedAt: userEntity.usr_updatedAt,
      createdAt: userEntity.usr_createdAt,
      profile: userEntity.profile
        ? ProfileEntity.MapperToDomain(userEntity.profile)
        : null,
    };
  }

  public static MapperToInfratstructure(user: Partial<UsersModel>): UserEntity {
    return {
      usr_id: user?.id ?? undefined,
      usr_email: user?.email ?? undefined,
      usr_password: user?.password ?? undefined,
      usr_updatedAt: user?.updatedAt ?? undefined,
      usr_createdAt: user?.createdAt ?? undefined,
      usr_profile: user?.profile?.id ?? undefined,
      profile: user?.profile
        ? ProfileEntity.MapperToInfrastructure(user?.profile)
        : null,
    };
  }
}
