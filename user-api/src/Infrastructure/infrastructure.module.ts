import { Module } from '@nestjs/common';

import { UserRepositoryModule } from './user/user.repository.module';
import { ProfileRepositoryModule } from './profile/profile.repository.module';
import { VehiculeRepositoryProvider } from './vehicule/vehicule.repository.provider';
import { VehiculeRepositoryModule } from './vehicule/vehicule.repository.module';

@Module({
  imports: [
    UserRepositoryModule,
    ProfileRepositoryModule,
    VehiculeRepositoryModule,
  ],
  exports: [
    UserRepositoryModule,
    ProfileRepositoryModule,
    VehiculeRepositoryModule,
  ],
})
export class InfrastructureModule {}
