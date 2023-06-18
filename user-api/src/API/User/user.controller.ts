import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserUsecaseDomain } from '../../Domain/User/user.usecase.domain';
import { UsersModel } from '../../Domain/User/models/user.model';
import * as http from 'http';
import { classToPlain, instanceToPlain, serialize } from 'class-transformer';
import { Profile, Users } from '@prisma/client';
import { CreateUserDto } from './DTO/create-user.dto';
import { UserEntity } from '../../Infrastructure/user/entity/user.entity';
import { UpdateUserDto } from './DTO/update-user.dto';
import { CreateProfileDto } from './DTO/create-profile.dto';
import { ProfileUseCaseDomain } from '../../Domain/Profile/profile.usecase.domain';
import { ProfileModel } from '../../Domain/Profile/models/profile.model';
import { CreateVehiculeDto } from './DTO/create-vehicule.dto';
import { VehiculeModel } from '../../Domain/Vehicule/models/vehicule.model';
import { VehiculeUseCaseDomain } from '../../Domain/Vehicule/vehicule.use-case.domain';

@Controller('users')
export class UserController {
  constructor(
    private readonly userUseCase: UserUsecaseDomain,
    private readonly profileUseCase: ProfileUseCaseDomain,
    private readonly vehiculeUseCase: VehiculeUseCaseDomain,
  ) {}

  @Get()
  @HttpCode(200)
  public async getAll(): Promise<Array<UsersModel>> {
    const users = await this.userUseCase.getAll();
    if (!users) {
      throw new NotFoundException();
    }
    return users.map((el) => new UsersModel(el));
  }

  @Get(':id')
  @HttpCode(200)
  public async getOne(@Param('id') id: number): Promise<UsersModel> {
    const user = await this.userUseCase.getOne(+id);
    if (!user) {
      throw new NotFoundException();
    }
    return new UsersModel(user);
  }

  @Post()
  @HttpCode(201)
  public async create(@Body() createUser: CreateUserDto): Promise<UsersModel> {
    if (!createUser) {
      throw new BadRequestException();
    }
    const userToDomain = new UsersModel(createUser);
    const user = await this.userUseCase.create(userToDomain);
    if (!user) {
      throw new NotFoundException();
    }

    return new UsersModel(user);
  }

  @Post(':id/profile')
  public async createProfile(
    @Param('id') id: number,
    @Body() createProfile: CreateProfileDto,
  ): Promise<ProfileModel> {
    if (!createProfile) {
      throw new BadRequestException();
    }
    const profileToDomain = new ProfileModel(createProfile);
    const profile = await this.profileUseCase.createProfile(
      id,
      profileToDomain,
    );
    if (!profile) {
      throw new NotFoundException();
    }
    return new ProfileModel(profile);
  }

  @Post('profile/:id/vehicule')
  public async createVehicule(
    @Param('id') id: number,
    @Body() createVehicule: CreateVehiculeDto,
  ): Promise<VehiculeModel> {
    if (!createVehicule) {
      throw new BadRequestException();
    }
    const vehiculeToDomain = new VehiculeModel(createVehicule);
    const vehicule = await this.vehiculeUseCase.create(id, vehiculeToDomain);

    if (!vehicule) {
      throw new NotFoundException();
    }
    return new VehiculeModel(vehicule);
  }

  @Put()
  public async updateEmail(
    @Body() updateUser: UpdateUserDto,
  ): Promise<UsersModel> {
    if (!updateUser) {
      throw new BadRequestException();
    }
    const userToDomain = new UsersModel(updateUser);
    const user = await this.userUseCase.updateUser(userToDomain);
    if (!user) {
      throw new NotFoundException();
    }
    return new UsersModel(user);
  }
}
