import { VehiculeModel } from './models/vehicule.model';

export interface VehiculeRepositoryInterface {
  create(id: number, vehicule: Partial<VehiculeModel>): Promise<any>;
}

export const VehiculeRepositoryInterface = Symbol(
  'VehiculeRepositoryInterface',
);
