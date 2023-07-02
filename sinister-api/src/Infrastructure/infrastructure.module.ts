import { Module } from '@nestjs/common';

import { SinisterRepositoryModule } from './sinister/sinister.repository.module';
import { SinisterHistoryRepositoryModule } from './sinister-history/sinister-history.repository.module';

@Module({
  imports: [SinisterRepositoryModule, SinisterHistoryRepositoryModule],
  exports: [SinisterRepositoryModule, SinisterHistoryRepositoryModule],
})
export class InfrastructureModule {}
