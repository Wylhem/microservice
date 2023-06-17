import { Inject, Injectable } from '@nestjs/common';
import { UsersRepositoryInterface } from './users.repository.interface';
import { UsersModel } from './models/user.model';

@Injectable()
export class UserUsecaseDomain {
  constructor(
    @Inject(UsersRepositoryInterface)
    private readonly repository: UsersRepositoryInterface,
  ) {}

  public async getAll(): Promise<Array<UsersModel>> {
    return await this.repository.getAll();
  }

  public async getOne(userId: number): Promise<UsersModel> {
    return await this.repository.getOne(userId);
  }

  public async create(user: Partial<UsersModel>): Promise<UsersModel> {
    return await this.repository.create(user);
  }

  public async updateUser(user: Partial<UsersModel>): Promise<UsersModel> {
    return await this.repository.updateEmail(+user.id, user);
  }
}
