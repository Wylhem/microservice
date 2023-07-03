import { SinistersRepositoryInterface } from '../../Domain/Sinister/sinisters.repository.interface';
import { SinistersModel } from '../../Domain/Sinister/models/sinister.model';
import { PrismaService } from '../../database/database.connection';
import { SinisterEntity } from './entity/sinister.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SinisterRepository implements SinistersRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async getAll(): Promise<Array<SinistersModel>> {
    const sinisters: Array<SinisterEntity> =
      await this.prisma.sinister.findMany({});
    return sinisters.map((sinister) => SinisterEntity.MapperToDomain(sinister));
  }

  public async getOne(sinisterId: number): Promise<SinistersModel> {
    const sinisters: SinisterEntity =
      await this.prisma.sinister.findFirstOrThrow({
        where: {
          sin_id: sinisterId,
        },
      });
    return SinisterEntity.MapperToDomain(sinisters);
  }

  public async create(
    sinister: Partial<SinistersModel>,
  ): Promise<SinistersModel> {
    const sinisterEntity: SinisterEntity =
      SinisterEntity.MapperToInfratstructure(sinister);
    const prismaUser = await this.prisma.sinister.create({
      data: {
        sin_label: sinisterEntity.sin_label,
      },
    });
    return SinisterEntity.MapperToDomain(prismaUser);
  }

  public async updateLabel(
    sinisterId: number,
    sinister: Partial<SinistersModel>,
  ): Promise<SinistersModel> {
    const sinisterEntity: SinisterEntity =
      SinisterEntity.MapperToInfratstructure(sinister);
    const prismaUser = await this.prisma.sinister.update({
      where: {
        sin_id: sinisterId,
      },
      data: {
        sin_label: sinisterEntity.sin_label,
      },
    });
    return SinisterEntity.MapperToDomain(prismaUser);
  }
}
