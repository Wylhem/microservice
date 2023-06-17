import { UsersRepositoryInterface } from '../../Domain/User/users.repository.interface';
import { User } from '../../Domain/User/user.type';
import { PrismaService } from '../../database/database.connection';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements UsersRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async getAll(): Promise<Array<Partial<User>>> {
    const users: Array<UserEntity> = await this.prisma.users.findMany();
    return users.map((user) => UserEntity.Mapper(user));
  }
}
