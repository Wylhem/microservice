import { Provider } from '@nestjs/common';
import { ContractRepository } from './contract.repository';
import { ContractsRepositoryInterface } from '../../Domain/Contract/contracts.repository.interface';
export const ContractRepositoryProvider: Provider = {
  provide: ContractsRepositoryInterface,
  useClass: ContractRepository,
};
