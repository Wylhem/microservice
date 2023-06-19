import { Inject, Injectable } from '@nestjs/common';
import { UsersRepositoryInterface } from './tarifications.repository.interface';
import { TarificationsModel } from './models/tarification.model';

@Injectable()
export class TarificationUsecaseDomain {
  constructor(
    @Inject(TarificationsRepositoryInterface)
    private readonly repository: UsersRepositoryInterface,
  ) {}

  public async getAll(): Promise<Array<TarificationsModel>> {
    return await this.repository.getAll();
  }

  public async getOne(tarificationId: number): Promise<TarificationsModel> {
    return await this.repository.getOne(tarificationId);
  }

  public async create(tarification: Partial<TarificationsModel>): Promise<TarificationsModel> {
    return await this.repository.create(tarification);
  }

  public async updateUser(tarification: Partial<TarificationsModel>): Promise<TarificationsModel> {
    return await this.repository.updateEmail(+tarification.id, tarification);
  }
}
