import { ProfileRepositoryProvider } from './profile.repository.provider';
import { Module } from '@nestjs/common';

@Module({
  providers: [ProfileRepositoryProvider],
  exports: [ProfileRepositoryProvider],
})
export class ProfileRepositoryModule {}
