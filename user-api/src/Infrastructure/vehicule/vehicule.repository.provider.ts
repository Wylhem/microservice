import { Provider } from '@nestjs/common';
import { VehiculeRepositoryInterface } from '../../Domain/Vehicule/vehicule.repository.interface';
import { VehiculeRepository } from './vehicule.repository';

export const VehiculeRepositoryProvider: Provider = {
  provide: VehiculeRepositoryInterface,
  useClass: VehiculeRepository,
};
