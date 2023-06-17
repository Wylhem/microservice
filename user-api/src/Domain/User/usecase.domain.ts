import { Inject, Injectable } from '@nestjs/common';
import { UsersRepositoryInterface } from './users.repository.interface';
import { User } from './user.type';

@Injectable()
export class UseCaseDomain {
  constructor(
    @Inject(UsersRepositoryInterface)
    private readonly repository: UsersRepositoryInterface,
  ) {}

  public async getAll(): Promise<Array<Partial<User>>> {
    return await this.repository.getAll();
  }
}
