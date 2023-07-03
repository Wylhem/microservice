import { Module } from '@nestjs/common';
import { SinisterHistoryUsecaseDomain } from './sinister-history.usecase.domain';
import { SinisterHistoryRepositoryModule } from '../../Infrastructure/sinister/sinister-history.repository.module';

@Module({
  imports: [SinisterHistoryRepositoryModule],
  providers: [SinisterHistoryUsecaseDomain],
  exports: [SinisterHistoryUsecaseDomain],
})
export class SinisterHistoryModule {}
