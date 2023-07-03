import { Profile } from '@prisma/client';
import { ProfileModel } from '../../../Domain/Profile/models/profile.model';
export class ProfileEntity implements Profile {
  prf_id: number;
  prf_firstname: string;
  prf_lastname: string;
  prf_points: number;
  prf_updatedat: Date;
  prf_createdAt: Date;

  public static MapperToDomain(profileEntity: ProfileEntity): ProfileModel {
    return {
      id: profileEntity.prf_id,
      firstname: profileEntity.prf_firstname,
      lastname: profileEntity.prf_lastname,
      points: profileEntity.prf_points,
      updatedAt: profileEntity.prf_updatedat,
      createdAt: profileEntity.prf_createdAt,
    };
  }

  public static MapperToInfrastructure(
    profileModel: Partial<ProfileModel>,
  ): ProfileEntity {
    return {
      prf_id: profileModel?.id ?? undefined,
      prf_firstname: profileModel?.firstname ?? undefined,
      prf_lastname: profileModel?.lastname ?? undefined,
      prf_points: profileModel?.points ?? undefined,
      prf_updatedat: profileModel?.updatedAt ?? undefined,
      prf_createdAt: profileModel?.createdAt ?? undefined,
    };
  }
}
