import { Provider } from '@nestjs/common';
import { ProfileRepositoryInterface } from '../../../Domain/Profile/profile.repository.interface';
import { ProfileRepository } from './profile.repository';

export const ProfileRepositoryProvider: Provider = {
  provide: ProfileRepositoryInterface,
  useClass: ProfileRepository,
};
