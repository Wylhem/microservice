import { Sinister } from '@prisma/client';
import { SinistersModel } from '../../../Domain/Sinister/models/sinister.model';

export class SinisterEntity implements Sinister {
  sin_id: number;
  sin_label: string;
  sin_createdAt: Date;
  sin_updatedAt: Date;

  public static MapperToDomain(sinisterEntity: SinisterEntity): SinistersModel {
    return {
      id: sinisterEntity.sin_id,
      label: sinisterEntity.sin_label,
      updatedAt: sinisterEntity.sin_updatedAt,
      createdAt: sinisterEntity.sin_createdAt,
    };
  }

  public static MapperToInfratstructure(
    sinister: Partial<SinistersModel>,
  ): SinisterEntity {
    return {
      sin_id: sinister?.id ?? undefined,
      sin_label: sinister?.label ?? undefined,
      sin_updatedAt: sinister?.updatedAt ?? undefined,
      sin_createdAt: sinister?.createdAt ?? undefined,
    };
  }
}
