import { ContractRepositoryProvider } from './contract.repository.provider';
import { Module } from '@nestjs/common';

@Module({
  providers: [ContractRepositoryProvider],
  exports: [ContractRepositoryProvider],
})
export class ContractRepositoryModule {}
