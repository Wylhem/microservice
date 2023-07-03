import { Inject, Injectable } from '@nestjs/common';
import { SinistersHistoryRepositoryInterface } from './sinisters-history.repository.interface';
import { SinistersHistoryModel } from './models/sinister-history.model';

@Injectable()
export class SinisterHistoryUsecaseDomain {
  constructor(
    @Inject(SinistersHistoryRepositoryInterface)
    private readonly repository: SinistersHistoryRepositoryInterface,
  ) {}

  public async create(
    sinisterHistory: Partial<SinistersHistoryModel>,
  ): Promise<SinistersHistoryModel> {
    return await this.repository.create(sinisterHistory);
  }
}
