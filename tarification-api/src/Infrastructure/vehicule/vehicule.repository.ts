import { PrismaService } from '../../database/database.connection';
import { VehiculeRepositoryInterface } from '../../Domain/Vehicule/vehicule.repository.interface';
import { VehiculeModel } from '../../Domain/Vehicule/models/vehicule.model';
import { VehiculeEntity } from './entity/vehicule.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiculeRepository implements VehiculeRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    id: number,
    vehicule: Partial<VehiculeModel>,
  ): Promise<VehiculeModel> {
    const vehiculeEntity: VehiculeEntity =
      VehiculeEntity.MapperToInfrastructure(vehicule);

    const vehiculeP = await this.prisma.vehicule.create({
      data: {
        vhc_age: vehiculeEntity.vhc_age,
        vhc_registration: vehiculeEntity.vhc_registration,
        vhc_brand: vehiculeEntity.vhc_brand,
        profile: {
          connect: {
            prf_id: id,
          },
        },
        vehiculeType: {
          connect: {
            vht_id: vehiculeEntity.vehiculeType.vht_id,
          },
        },
      },
    });
    return VehiculeEntity.MapperToDomain(vehiculeEntity);
  }
}
