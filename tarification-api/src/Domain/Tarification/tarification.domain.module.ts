import { Module } from '@nestjs/common';
import { TarificationUsecaseDomain } from './tarification.usecase.domain';
import { TarificationRepositoryModule } from '../../Infrastructure/tarification/tarification.repository.module';

@Module({
  imports: [TarificationRepositoryModule],
  providers: [TarificationUsecaseDomain],
  exports: [TarificationUsecaseDomain],
})
export class TarificationModule {}
