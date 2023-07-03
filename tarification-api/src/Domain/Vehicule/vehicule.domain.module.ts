import { Module } from '@nestjs/common';
import { VehiculeUseCaseDomain } from './vehicule.use-case.domain';
import { VehiculeRepositoryModule } from '../../Infrastructure/vehicule/vehicule.repository.module';

@Module({
  imports: [VehiculeRepositoryModule],
  providers: [VehiculeUseCaseDomain],
  exports: [VehiculeUseCaseDomain],
})
export class VehiculeDomainModule {}
