import { Module } from '@nestjs/common';
import { SinisterController } from './Sinister/sinister.controller';
import { DomainModule } from '../Domain/domain.module';

@Module({
  controllers: [SinisterController],
  imports: [DomainModule],
})
export class ApiModule {}
