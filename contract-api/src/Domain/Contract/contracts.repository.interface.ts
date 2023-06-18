import { ContractsModel } from './models/contract.model';

export interface ContractsRepositoryInterface {
  getAll(): Promise<Array<ContractsModel>>;

  getOne(contractId: number): Promise<ContractsModel>;

  create(contract: Partial<ContractsModel>): Promise<ContractsModel>;

  updateContract(
    contractId: number,
    contract: Partial<ContractsModel>,
  ): Promise<ContractsModel>;
}
export const ContractsRepositoryInterface = Symbol(
  'ContractsRepositoryInterface',
);
