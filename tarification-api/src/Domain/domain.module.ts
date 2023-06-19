import { Module } from '@nestjs/common';

import { UserModule } from './User/user.domain.module';
import { ProfileDomainModule } from './Profile/profile.domain.module';
import { VehiculeDomainModule } from './Vehicule/vehicule.domain.module';
import { InfrastructureModule } from '../Infrastructure/infrastructure.module';
import { UserUsecaseDomain } from './User/user.usecase.domain';
import { ProfileUseCaseDomain } from './Profile/profile.usecase.domain';
import { VehiculeUseCaseDomain } from './Vehicule/vehicule.use-case.domain';

@Module({
  imports: [UserModule, ProfileDomainModule, VehiculeDomainModule],
  exports: [UserModule, VehiculeDomainModule, ProfileDomainModule],
})
export class DomainModule {}
