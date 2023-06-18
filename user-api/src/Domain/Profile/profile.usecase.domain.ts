import { ProfileModel } from './models/profile.model';
import { Inject, Injectable } from '@nestjs/common';
import { ProfileRepositoryInterface } from './profile.repository.interface';

@Injectable()
export class ProfileUseCaseDomain {
  constructor(
    @Inject(ProfileRepositoryInterface)
    private readonly profileRepository: ProfileRepositoryInterface,
  ) {}
  async createProfile(
    id: number,
    profile: Partial<ProfileModel>,
  ): Promise<ProfileModel> {
    return await this.profileRepository.create(+id, profile);
  }
}
