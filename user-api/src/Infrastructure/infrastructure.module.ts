import { Module } from '@nestjs/common';

import { UserRepositoryModule } from './user/user.repository.module';
import { ProfileRepositoryModule } from './profile/entity/profile.repository.module';

@Module({
  imports: [UserRepositoryModule, ProfileRepositoryModule],
  exports: [UserRepositoryModule],
})
export class InfrastructureModule {}
