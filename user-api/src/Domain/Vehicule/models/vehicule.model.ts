import { ProfileModel } from '../../Profile/models/profile.model';
import { Expose, Type } from 'class-transformer';
import { VehiculeTypeModel } from '../../vehiculeType/models/vehicule-type.model';

export class VehiculeModel {
  @Expose()
  id: number;

  @Expose()
  brand: string;

  @Expose()
  registration: string;

  @Expose()
  age: number;

  @Expose()
  updatedAt: Date;

  @Expose()
  createdAt: Date;

  @Expose()
  @Type(() => ProfileModel)
  profile: ProfileModel;

  @Expose()
  @Type(() => VehiculeTypeModel)
  vehiculeType: VehiculeTypeModel;

  constructor(partial: Partial<VehiculeModel>) {
    Object.assign(this, partial);
  }
}
