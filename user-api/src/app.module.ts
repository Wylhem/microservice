import { Module } from '@nestjs/common';
import { InfrastructureModule } from './Infrastructure/infrastructure.module';
import { ApiModule } from './API/api.module';
import { DomainModule } from './Domain/domain.module';
import { PrismaModule } from './database/database.module';
import { TestsModule } from './tests/tests.module';
@Module({
  imports: [PrismaModule, InfrastructureModule, ApiModule, DomainModule, TestsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
