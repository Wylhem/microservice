import { SinistersHistoryModel } from './models/sinister-history.model';

export interface SinistersHistoryRepositoryInterface {
  // getAll(): Promise<Array<SinistersHistoryModel>>;

  create(
    sinisterHistory: Partial<SinistersHistoryModel>,
  ): Promise<SinistersHistoryModel>;

  updateSinisterHistory(
    sinisterHistoryId: number,
    sinisterHistory: Partial<SinistersHistoryModel>,
  ): Promise<SinistersHistoryModel>;
}
export const SinistersHistoryRepositoryInterface = Symbol(
  'SinistersHistoryRepositoryInterface',
);
