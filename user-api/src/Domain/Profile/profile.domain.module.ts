import { Module } from '@nestjs/common';
import { ProfileUseCaseDomain } from './profile.usecase.domain';
import { ProfileRepositoryModule } from '../../Infrastructure/profile/entity/profile.repository.module';

@Module({
  imports: [ProfileRepositoryModule],
  providers: [ProfileUseCaseDomain],
  exports: [ProfileUseCaseDomain],
})
export class ProfileDomainModule {}
