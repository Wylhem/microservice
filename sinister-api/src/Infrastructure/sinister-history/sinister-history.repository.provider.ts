import { Provider } from '@nestjs/common';
import { SinisterHistoryRepository } from './sinister-history.repository';
import { SinistersHistoryRepositoryInterface } from '../../Domain/SinisterHistory/sinisters-history.repository.interface';
export const SinisterHistoryRepositoryProvider: Provider = {
  provide: SinistersHistoryRepositoryInterface,
  useClass: SinisterHistoryRepository,
};
