import { Module } from '@nestjs/common';

import { UserModule } from './User/user.domain.module';

@Module({
  imports: [UserModule],
  exports: [UserModule],
})
export class DomainModule {}
