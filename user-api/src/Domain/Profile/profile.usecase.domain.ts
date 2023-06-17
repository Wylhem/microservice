import { ProfileModel } from './models/profile.model';

export class ProfileUseCaseDomain {
  async createProfile(profile: Partial<ProfileModel>): Promise<ProfileModel> {
    return;
  }
}
