import { Module } from '@nestjs/common';
import { UserController } from './Tarification/tarification.controller';
import { DomainModule } from '../Domain/domain.module';

@Module({
  controllers: [UserController],
  imports: [DomainModule],
})
export class ApiModule {}
