import { SinistersRepositoryInterface } from '../../Domain/Sinister/sinisters.repository.interface';
import { SinistersModel } from '../../Domain/Sinister/models/sinister.model';
import { PrismaService } from '../../database/database.connection';
import { SinisterHistoryEntity } from './entity/sinister-history.entity';
import { Injectable } from '@nestjs/common';
import { SinistersHistoryRepositoryInterface } from 'src/Domain/SinisterHistory/sinisters-history.repository.interface';
import { SinistersHistoryModel } from 'src/Domain/SinisterHistory/models/sinister-history.model';

@Injectable()
export class SinisterHistoryRepository
  implements SinistersHistoryRepositoryInterface
{
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    sinister: Partial<SinistersHistoryModel>,
  ): Promise<SinistersHistoryModel> {
    const sinisterEntity: SinisterHistoryEntity =
      SinisterHistoryEntity.MapperToInfratstructure(sinister);
    const prismaUser = await this.prisma.sinisterHistory.create({
      data: {
        include
      },
    });
    return SinisterHistoryEntity.MapperToDomain(prismaUser);
  }

  public async updateSinisterHistory(
    sinisterId: number,
    sinister: Partial<SinistersHistoryModel>,
  ): Promise<SinistersHistoryModel> {
    const sinisterEntity: SinisterHistoryEntity =
      SinisterHistoryEntity.MapperToInfratstructure(sinister);
    const prismaUser = await this.prisma.sinisterHistory.update({
      where: {
        sin_id: sinisterId,
      },
      data: {
        sin_label: sinisterEntity.sin_label,
      },
    });
    return SinisterHistoryEntity.MapperToDomain(prismaUser);
  }
}
