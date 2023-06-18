import { ProfileRepositoryInterface } from '../../Domain/Profile/profile.repository.interface';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.connection';
import { ProfileModel } from '../../Domain/Profile/models/profile.model';

import { ProfileEntity } from './entity/profile.entity';

@Injectable()
export class ProfileRepository implements ProfileRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    id: number,
    profile: Partial<ProfileModel>,
  ): Promise<ProfileModel> {
    const profileEntity = ProfileEntity.MapperToInfrastructure(profile);

    const prismaProfile = await this.prisma.profile.create({
      data: {
        ...profileEntity,
        Users: {
          connect: {
            usr_id: id,
          },
        },
      },
    });
    return ProfileEntity.MapperToDomain(prismaProfile);
  }
}
