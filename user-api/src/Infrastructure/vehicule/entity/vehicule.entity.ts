import { Vehicule } from '@prisma/client';
import { ProfileEntity } from '../../profile/entity/profile.entity';
import { VehiculeModel } from '../../../Domain/Vehicule/models/vehicule.model';
import { VehiculeTypeEntity } from '../../vehiculeType/entity/vehicule.entity';

export class VehiculeEntity implements Vehicule {
  vhc_profile: number;
  vhc_vehiculetype: number;
  vhc_id: number;
  vhc_brand: string;
  vhc_registration: string;
  vhc_age: number;
  vhc_updatedAt: Date;
  vhc_createdAt: Date;

  profile?: ProfileEntity;

  vehiculeType?: VehiculeTypeEntity;

  public static MapperToDomain(vehiculeEntity: VehiculeEntity): VehiculeModel {
    return {
      id: vehiculeEntity.vhc_id,
      brand: vehiculeEntity.vhc_brand,
      registration: vehiculeEntity.vhc_registration,
      age: vehiculeEntity.vhc_age,
      updatedAt: vehiculeEntity.vhc_updatedAt,
      createdAt: vehiculeEntity.vhc_createdAt,
      profile: vehiculeEntity.profile
        ? ProfileEntity.MapperToDomain(vehiculeEntity.profile)
        : null,
      vehiculeType: vehiculeEntity.vehiculeType
        ? VehiculeTypeEntity.MapperToDomain(vehiculeEntity.vehiculeType)
        : null,
    };
  }

  public static MapperToInfrastructure(
    vehiculeModel: Partial<VehiculeModel>,
  ): VehiculeEntity {
    return {
      vhc_id: vehiculeModel.id,
      vhc_brand: vehiculeModel?.brand ?? undefined,
      vhc_registration: vehiculeModel?.registration ?? undefined,
      vhc_age: vehiculeModel?.age ?? undefined,
      vhc_updatedAt: vehiculeModel?.updatedAt ?? undefined,
      vhc_createdAt: vehiculeModel?.createdAt ?? undefined,
      vhc_vehiculetype: vehiculeModel?.vehiculeType?.id ?? undefined,
      vehiculeType: vehiculeModel?.vehiculeType
        ? VehiculeTypeEntity.MapperToInfratructure(vehiculeModel.vehiculeType)
        : null,
      profile: vehiculeModel?.profile
        ? ProfileEntity.MapperToInfrastructure(vehiculeModel?.profile)
        : null,
      vhc_profile: vehiculeModel?.profile?.id ?? undefined,
    };
  }
}
