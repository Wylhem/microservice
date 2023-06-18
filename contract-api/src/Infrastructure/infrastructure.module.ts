import { Module } from '@nestjs/common';

import { ContractRepositoryModule } from './contract/contract.repository.module';

@Module({
  imports: [ContractRepositoryModule],
  exports: [ContractRepositoryModule],
})
export class InfrastructureModule {}
