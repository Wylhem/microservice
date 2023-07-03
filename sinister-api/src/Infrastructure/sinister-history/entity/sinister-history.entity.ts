import { SinisterHistory } from '@prisma/client';
import { SinistersHistoryModel } from '../../../Domain/SinisterHistory/models/sinister-history.model';
import { SubscriptionEntity } from '../../../../../subscription-api/src/Infrastructure/subscription/entity/subscription.entity';
import { ContractEntity } from '../../../../../contract-api/src/Infrastructure/contract/entity/contract.entity';
import { ProfileEntity } from '../../../../../user-api/src/Infrastructure/profile/entity/profile.entity';

export class SinisterHistoryEntity implements SinisterHistory {
  sih_id: number;
  sih_subscription: number;
  sub_profile: number;
  sih_sinister: number;
  sih_date: Date;
  sih_createdAt: Date;
  sih_updatedAt: Date;

  profile?: ProfileEntity;
  subscription?: SubscriptionEntity;
  contract?: ContractEntity[];

  public static MapperToDomain(
    sinisterHistoryEntity: SinisterHistoryEntity,
  ): SinistersHistoryModel {
    return {
      id: sinisterHistoryEntity.sih_id,
      date: sinisterHistoryEntity.sih_date,
      updatedAt: sinisterHistoryEntity.sih_updatedAt,
      createdAt: sinisterHistoryEntity.sih_createdAt,
      profile: sinisterHistoryEntity.profile
        ? ProfileEntity.MapperToDomain(sinisterHistoryEntity.profile)
        : null,
      subscription: sinisterHistoryEntity.subscription
        ? SubscriptionEntity.MapperToDomain(sinisterHistoryEntity.subscription)
        : null,
      contract: sinisterHistoryEntity.contract
        ? ContractEntity.contract.map((contract) =>
            ProfileEntity.MapperToDomain(contract),
          )
        : [],
    };
  }

  public static MapperToInfratstructure(
    sinisterHistory: Partial<SinistersHistoryModel>,
  ): SinisterHistoryEntity {
    return {
      sih_id: sinisterHistory?.id ?? undefined,
      sih_date: sinisterHistory?.date ?? undefined,
      sih_updatedAt: sinisterHistory?.updatedAt ?? undefined,
      sih_createdAt: sinisterHistory?.createdAt ?? undefined,
      profile: sinisterHistory?.profile
        ? ProfileEntity.MapperToInfrastructure(sinisterHistory?.profile)
        : null,
      subscription: sinisterHistory.subscription
        ? SubscriptionEntity.MapperToDomain(sinisterHistory.subscription)
        : null,
      contract: sinisterHistory.contract
        ? sinisterHistory.contract.map((contract) =>
            ContractEntity.MapperToDomain(contract),
          )
        : [],
      sub_profile: sinisterHistory?.subscription?.profile.id ?? undefined,
      sih_subscription: sinisterHistory?.subscription?.id ?? undefined,
      sih_sinister: sinisterHistory?.sinisters?.id ?? undefined,
    };
  }
}
