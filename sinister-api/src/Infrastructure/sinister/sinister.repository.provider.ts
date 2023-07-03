import { Provider } from '@nestjs/common';
import { SinisterRepository } from './sinister.repository';
import { SinistersRepositoryInterface } from '../../Domain/Sinister/sinisters.repository.interface';
export const SinisterRepositoryProvider: Provider = {
  provide: SinistersRepositoryInterface,
  useClass: SinisterRepository,
};
