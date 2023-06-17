import { Controller, Get, HttpCode, NotFoundException } from '@nestjs/common';
import { UseCaseDomain } from '../../Domain/User/usecase.domain';
import { User } from '../../Domain/User/user.type';
import * as http from 'http';

@Controller('users')
export class UserController {
  constructor(private userUseCase: UseCaseDomain) {}

  @Get()
  @HttpCode(200)
  public async getAll(): Promise<Array<Partial<User>>> {
    const user = await this.userUseCase.getAll();
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
