import { Module } from '@nestjs/common';

import { UserModule } from './User/user.domain.module';
import { ProfileDomainModule } from './Profile/profile.domain.module';

@Module({
  imports: [UserModule, ProfileDomainModule],
  exports: [UserModule, ProfileDomainModule],
})
export class DomainModule {}
