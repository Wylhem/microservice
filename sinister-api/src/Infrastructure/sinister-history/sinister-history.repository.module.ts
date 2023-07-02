import { SinisterHistoryRepositoryProvider } from './sinister-history.repository.provider';
import { Module } from '@nestjs/common';

@Module({
  providers: [SinisterHistoryRepositoryProvider],
  exports: [SinisterHistoryRepositoryProvider],
})
export class SinisterHistoryRepositoryModule {}
