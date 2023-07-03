import { VehiculeType } from '@prisma/client';
import { VehiculeTypeModel } from '../../../Domain/vehiculeType/models/vehicule-type.model';

export class VehiculeTypeEntity implements VehiculeType {
  vht_id: number;
  vht_label: string;
  vht_category: string;
  vht_updatedAt: Date;
  vht_createdAt: Date;

  public static MapperToDomain(
    vehiculeType: VehiculeTypeEntity,
  ): VehiculeTypeModel {
    return {
      id: vehiculeType.vht_id,
      label: vehiculeType.vht_label,
      category: vehiculeType.vht_category,
      updatedAt: vehiculeType.vht_updatedAt,
      createdAt: vehiculeType.vht_createdAt,
    };
  }

  public static MapperToInfratructure(
    vehiculeType: Partial<VehiculeTypeModel>,
  ): VehiculeTypeEntity {
    return {
      vht_id: vehiculeType?.id ?? undefined,
      vht_label: vehiculeType?.label ?? undefined,
      vht_category: vehiculeType?.category ?? undefined,
      vht_updatedAt: vehiculeType?.updatedAt ?? undefined,
      vht_createdAt: vehiculeType?.createdAt ?? undefined,
    };
  }
}
