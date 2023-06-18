export class VehiculeTypeModel {
  id: number;
  label: string;
  category: string;
  updatedAt: Date;
  createdAt: Date;

  constructor(partial: Partial<VehiculeTypeModel>) {
    Object.assign(this, partial);
  }
}
