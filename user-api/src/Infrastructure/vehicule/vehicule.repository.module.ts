import { Module } from '@nestjs/common';
import { VehiculeRepository } from './vehicule.repository';
import { VehiculeRepositoryProvider } from './vehicule.repository.provider';

@Module({
  providers: [VehiculeRepositoryProvider],
  exports: [VehiculeRepositoryProvider],
})
export class VehiculeRepositoryModule {}
