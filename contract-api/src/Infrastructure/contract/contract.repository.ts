import { ContractsRepositoryInterface } from '../../Domain/Contract/contracts.repository.interface';
import { ContractsModel } from '../../Domain/Contract/models/contract.model';
import { PrismaService } from '../../database/database.connection';
import { ContractEntity } from './entity/contract.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractRepository implements ContractsRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async getAll(): Promise<Array<ContractsModel>> {
    const contracts: Array<ContractEntity> =
      await this.prisma.contract.findMany();
    return contracts.map((contract) => ContractEntity.MapperToDomain(contract));
  }

  public async getOne(contractId: number): Promise<ContractsModel> {
    const contracts: ContractEntity =
      await this.prisma.contract.findFirstOrThrow({
        where: {
          ctr_id: contractId,
        },
      });
    return ContractEntity.MapperToDomain(contracts);
  }

  public async create(
    contract: Partial<ContractsModel>,
  ): Promise<ContractsModel> {
    const contractEntity: ContractEntity =
      ContractEntity.MapperToInfratstructure(contract);
    const prismaUser = await this.prisma.contract.create({
      data: {
        ctr_status: contractEntity.ctr_status,
      },
      include: {
        profile: true,
        sinisterHistory: true,
      },
    });
    return ContractEntity.MapperToDomain(prismaUser);
  }

  public async updateContract(
    contractId: number,
    contract: Partial<ContractsModel>,
  ): Promise<ContractsModel> {
    const prismaUser = await this.prisma.contract.update({
      where: {
        ctr_id: contractId,
      },
      data: {
        ctr_status: contract.status,
      },
    });
    return ContractEntity.MapperToDomain(prismaUser);
  }
}
