import { UserRepositoryProvider } from './user.repository.provider';
import { Module } from '@nestjs/common';

@Module({
  providers: [UserRepositoryProvider],
  exports: [UserRepositoryProvider],
})
export class UserRepositoryModule {}
