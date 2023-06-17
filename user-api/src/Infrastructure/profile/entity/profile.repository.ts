import { ProfileRepositoryInterface } from '../../../Domain/Profile/profile.repository.interface';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/database.connection';
import { ProfileModel } from '../../../Domain/Profile/models/profile.model';

import { ProfileEntity } from './profile.entity';

@Injectable()
export class ProfileRepository implements ProfileRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(profile: Partial<ProfileModel>): Promise<ProfileModel> {
    const profileEntity = ProfileEntity.MapperToInfrastructure(profile);

    const prismaProfile = await this.prisma.profile.create({
      data: profileEntity,
    });
    return ProfileEntity.MapperToDomain(prismaProfile);
  }
}
