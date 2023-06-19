import { Inject, Injectable } from '@nestjs/common';
import { ContractsRepositoryInterface } from './contracts.repository.interface';
import { ContractsModel } from './models/contract.model';

@Injectable()
export class ContractUsecaseDomain {
  constructor(
    @Inject(ContractsRepositoryInterface)
    private readonly repository: ContractsRepositoryInterface,
  ) {}

  public async getAll(): Promise<Array<ContractsModel>> {
    return await this.repository.getAll();
  }

  public async getOne(userId: number): Promise<ContractsModel> {
    return await this.repository.getOne(userId);
  }

  public async create(
    contract: Partial<ContractsModel>,
  ): Promise<ContractsModel> {
    return await this.repository.create(contract);
  }

  public async updateContract(
    contract: Partial<ContractsModel>,
  ): Promise<ContractsModel> {
    return await this.repository.update(+contract.id, contract);
  }
}