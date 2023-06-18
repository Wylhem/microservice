import { ProfileModel } from './models/profile.model';

export interface ProfileRepositoryInterface {
  create(id: number, profile: Partial<ProfileModel>): Promise<ProfileModel>;
}
export const ProfileRepositoryInterface = Symbol('ProfileRepositoryInterface');
