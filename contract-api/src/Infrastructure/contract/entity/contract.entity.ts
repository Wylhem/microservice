import { Contract } from '@prisma/client';
import { ContractsModel } from '../../../Domain/Contract/models/contract.model';

export class ContractEntity implements Contract {
  ctr_id: number;
  ctr_status: number;
  ctr_updatedAt: Date;
  prf_createdAt: Date;
  ctr_profile: number;
  prf_sinisterhistory: number;

  public static MapperToDomain(contractEntity: ContractEntity): ContractsModel {
    return {
      id: contractEntity.ctr_id,
      status: contractEntity.ctr_status,
      updatedAt: contractEntity.ctr_updatedAt,
      createdAt: contractEntity.prf_createdAt,
    };
  }

  public static MapperToInfratstructure(
    contract: Partial<ContractsModel>,
  ): ContractEntity {
    return {
      ctr_id: contract?.id ?? undefined,
      ctr_status: contract?.status ?? undefined,
      ctr_updatedAt: contract?.updatedAt ?? undefined,
      prf_createdAt: contract?.createdAt ?? undefined,
      ctr_profile: undefined,
      prf_sinisterhistory: undefined,
    };
  }
}
