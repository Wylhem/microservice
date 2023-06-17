import { Module } from '@nestjs/common';
import { UserController } from './User/user.controller';
import { DomainModule } from '../Domain/domain.module';

@Module({
  controllers: [UserController],
  imports: [DomainModule],
})
export class ApiModule {}
