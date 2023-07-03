import { SinisterRepositoryProvider } from './sinister.repository.provider';
import { Module } from '@nestjs/common';

@Module({
  providers: [SinisterRepositoryProvider],
  exports: [SinisterRepositoryProvider],
})
export class SinisterRepositoryModule {}
