import { SinistersModel } from './models/sinister.model';

export interface SinistersRepositoryInterface {
  getAll(): Promise<Array<SinistersModel>>;

  getOne(userId: number): Promise<SinistersModel>;

  create(user: Partial<SinistersModel>): Promise<SinistersModel>;

  updateLabel(
    sinisterId: number,
    sinister: Partial<SinistersModel>,
  ): Promise<SinistersModel>;
}
export const SinistersRepositoryInterface = Symbol(
  'SinistersRepositoryInterface',
);
