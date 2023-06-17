import { Module } from '@nestjs/common';
import { UseCaseDomain } from './usecase.domain';
import { UserRepositoryModule } from '../../Infrastructure/user/user.repository.module';

@Module({
  imports: [UserRepositoryModule],
  providers: [UseCaseDomain],
  exports: [UseCaseDomain],
})
export class UserModule {}
