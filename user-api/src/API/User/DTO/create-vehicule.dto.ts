import { VehiculeTypeModel } from '../../../Domain/vehiculeType/models/vehicule-type.model';

export class CreateVehiculeDto {
  brand: string;
  registration: string;
  age: number;
  vehiculeType: VehiculeTypeModel;
}
