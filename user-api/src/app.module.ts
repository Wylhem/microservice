import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { InfrastructureModule } from './Infrastructure/infrastructure.module';
import { ApiModule } from './API/api.module';
import { DomainModule } from './Domain/domain.module';
import { PrismaModule } from './database/database.module';

import { APP_INTERCEPTOR } from '@nestjs/core';
@Module({
  imports: [PrismaModule, InfrastructureModule, ApiModule, DomainModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
