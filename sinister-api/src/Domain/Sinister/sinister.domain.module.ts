import { Module } from '@nestjs/common';
import { SinisterUsecaseDomain } from './sinister.usecase.domain';
import { SinisterRepositoryModule } from '../../Infrastructure/sinister/sinister-history.repository.module';

@Module({
  imports: [SinisterRepositoryModule],
  providers: [SinisterUsecaseDomain],
  exports: [SinisterUsecaseDomain],
})
export class SinisterModule {}
