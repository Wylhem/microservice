import { Module } from '@nestjs/common';
import { ContractController } from './Contract/contract.controller';
import { DomainModule } from '../Domain/domain.module';

@Module({
  controllers: [ContractController],
  imports: [DomainModule],
})
export class ApiModule {}
