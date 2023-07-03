import { Inject, Injectable } from '@nestjs/common';
import { SinistersRepositoryInterface } from './sinisters.repository.interface';
import { SinistersModel } from './models/sinister.model';

@Injectable()
export class SinisterUsecaseDomain {
  constructor(
    @Inject(SinistersRepositoryInterface)
    private readonly repository: SinistersRepositoryInterface,
  ) {}

  public async getAll(): Promise<Array<SinistersModel>> {
    return await this.repository.getAll();
  }

  public async getOne(sinisterId: number): Promise<SinistersModel> {
    return await this.repository.getOne(sinisterId);
  }

  public async create(
    sinister: Partial<SinistersModel>,
  ): Promise<SinistersModel> {
    return await this.repository.create(sinister);
  }

  public async updateUser(
    sinister: Partial<SinistersModel>,
  ): Promise<SinistersModel> {
    return await this.repository.updateLabel(+sinister.id, sinister);
  }
}
