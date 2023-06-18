import { Expose } from 'class-transformer';

export class ProfileModel {
  @Expose()
  id: number;

  @Expose()
  firstname: string;

  @Expose()
  lastname: string;

  @Expose()
  points: number;

  @Expose()
  updatedAt: Date;

  @Expose()
  createdAt: Date;

  constructor(partial: Partial<ProfileModel>) {
    Object.assign(this, partial);
  }
}
