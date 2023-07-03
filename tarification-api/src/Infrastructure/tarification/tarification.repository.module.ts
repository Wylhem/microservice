import { TarificationRepositoryProvider } from './tarification.repository.provider';
import { Module } from '@nestjs/common';

@Module({
  providers: [TarificationRepositoryProvider],
  exports: [TarificationRepositoryProvider],
})
export class TarificationRepositoryModule {}
