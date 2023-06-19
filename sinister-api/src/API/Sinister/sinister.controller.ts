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
import { SinisterUsecaseDomain } from '../../Domain/Sinister/sinister.usecase.domain';
import { SinistersModel } from '../../Domain/Sinister/models/sinister.model';
import { Sinister } from '@prisma/client';
import { CreateSinisterDto } from './DTO/create-sinister.dto';
import { UpdateSinisterDto } from './DTO/update-sinster.dto';

@Controller('sinister')
export class SinisterController {
  constructor(private readonly sinisterUseCase: SinisterUsecaseDomain) {}

  @Get()
  @HttpCode(200)
  public async getAll(): Promise<Array<SinistersModel>> {
    const sinisters = await this.sinisterUseCase.getAll();
    if (!sinisters) {
      throw new NotFoundException();
    }
    return sinisters.map((el) => new SinistersModel(el));
  }

  @Get(':id')
  @HttpCode(200)
  public async getOne(@Param('id') id: number): Promise<SinistersModel> {
    const sinister = await this.sinisterUseCase.getOne(+id);
    if (!sinister) {
      throw new NotFoundException();
    }
    return new SinistersModel(sinister);
  }

  @Post()
  @HttpCode(201)
  public async create(
    @Body() createSinister: CreateSinisterDto,
  ): Promise<SinistersModel> {
    if (!createSinister) {
      throw new BadRequestException();
    }
    const sinisterToDomain = new SinistersModel(createSinister);
    const sinister = await this.sinisterUseCase.create(sinisterToDomain);
    if (!sinister) {
      throw new NotFoundException();
    }

    return new SinistersModel(sinister);
  }

  @Post(':id/profile')
  public async createProSinister(
    @Param('id') id: number,
    @Body() createSinister: CreateSinisterDto,
  ): Promise<SinistersModel> {
    if (!createSinister) {
      throw new BadRequestException();
    }
    const profileToDomain = new SinistersModel(createSinister);
    const sinister = await this.sinisterUseCase.createSinister(
      id,
      sinisterToDomain,
    );
    if (!sinister) {
      throw new NotFoundException();
    }
    return new SinistersModel(sinister);
  }

  @Put()
  public async updateLabel(
    @Body() updateSinister: UpdateSinisterDto,
  ): Promise<SinistersModel> {
    if (!updateSinister) {
      throw new BadRequestException();
    }
    const sinisterToDomain = new SinistersModel(updateSinister);
    const sinister = await this.sinisterUseCase.updateSinister(sinisterToDomain);
    if (!sinister) {
      throw new NotFoundException();
    }
    return new SinistersModel(sinister);
  }
}
