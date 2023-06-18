import { Module } from '@nestjs/common';

import { ContractModule } from './Contract/contract.domain.module';

@Module({
  imports: [ContractModule],
  exports: [ContractModule],
})
export class DomainModule {}
