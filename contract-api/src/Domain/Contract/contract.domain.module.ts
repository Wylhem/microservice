import { Module } from '@nestjs/common';
import { ContractUsecaseDomain } from './contract.usecase.domain';
import { ContractRepositoryModule } from '../../Infrastructure/contract/contract.repository.module';

@Module({
  imports: [ContractRepositoryModule],
  providers: [ContractUsecaseDomain],
  exports: [ContractUsecaseDomain],
})
export class ContractModule {}
