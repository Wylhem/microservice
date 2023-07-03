import { Inject, Injectable } from '@nestjs/common';
import { VehiculeRepositoryInterface } from './vehicule.repository.interface';
import { VehiculeModel } from './models/vehicule.model';

@Injectable()
export class VehiculeUseCaseDomain {
  constructor(
    @Inject(VehiculeRepositoryInterface)
    private readonly repository: VehiculeRepositoryInterface,
  ) {}

  public async create(
    id: number,
    vehicule: Partial<VehiculeModel>,
  ): Promise<VehiculeModel> {
    return await this.repository.create(+id, vehicule);
  }
}
