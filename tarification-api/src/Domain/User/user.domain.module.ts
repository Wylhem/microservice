import { Module } from '@nestjs/common';
import { UserUsecaseDomain } from './user.usecase.domain';
import { UserRepositoryModule } from '../../Infrastructure/user/user.repository.module';

@Module({
  imports: [UserRepositoryModule],
  providers: [UserUsecaseDomain],
  exports: [UserUsecaseDomain],
})
export class UserModule {}
