import { UsersRepositoryInterface } from '../../Domain/User/users.repository.interface';
import { UsersModel } from '../../Domain/User/models/user.model';
import { PrismaService } from '../../database/database.connection';
import { UserEntity } from './entity/user.entity';
import { Injectable } from '@nestjs/common';
import e from 'express';

@Injectable()
export class UserRepository implements UsersRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async getAll(): Promise<Array<UsersModel>> {
    const users: Array<UserEntity> = await this.prisma.users.findMany();
    return users.map((user) => UserEntity.MapperToDomain(user));
  }

  public async getOne(userId: number): Promise<UsersModel> {
    const users: UserEntity = await this.prisma.users.findFirstOrThrow({
      where: {
        usr_id: userId,
      },
    });
    return UserEntity.MapperToDomain(users);
  }

  public async create(user: Partial<UsersModel>): Promise<UsersModel> {
    const userEntity: UserEntity = UserEntity.MapperToInfratstructure(user);
    const prismaUser = await this.prisma.users.create({
      data: {
        usr_email: userEntity.usr_email,
        usr_password: userEntity.usr_password,
      },
    });
    return UserEntity.MapperToDomain(prismaUser);
  }

  public async updateEmail(
    userId: number,
    user: Partial<UsersModel>,
  ): Promise<UsersModel> {
    const userEntity: UserEntity = UserEntity.MapperToInfratstructure(user);
    const prismaUser = await this.prisma.users.update({
      where: {
        usr_id: userId,
      },
      data: {
        usr_email: user.email,
      },
    });
    return UserEntity.MapperToDomain(prismaUser);
  }
}
