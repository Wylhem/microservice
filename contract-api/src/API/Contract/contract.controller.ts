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
import { ContractUsecaseDomain } from '../../Domain/Contract/contract.usecase.domain';
import { ContractsModel } from '../../Domain/Contract/models/contract.model';
import { CreateContractDto } from './DTO/create-contract.dto';
import { UpdateContractDto } from './DTO/update-contract.dto';

@Controller('contracts')
export class ContractController {
  constructor(private readonly contractUseCase: ContractUsecaseDomain) {}

  @Get()
  @HttpCode(200)
  public async getAll(): Promise<Array<ContractsModel>> {
    const users = await this.contractUseCase.getAll();
    if (!users) {
      throw new NotFoundException();
    }
    return users.map((el) => new ContractsModel(el));
  }

  @Get(':id')
  @HttpCode(200)
  public async getOne(@Param('id') id: number): Promise<ContractsModel> {
    const user = await this.contractUseCase.getOne(+id);
    if (!user) {
      throw new NotFoundException();
    }
    return new ContractsModel(user);
  }

  @Post()
  @HttpCode(201)
  public async create(
    @Body() createContract: CreateContractDto,
  ): Promise<ContractsModel> {
    if (!createContract) {
      throw new BadRequestException();
    }
    const contractToDomain = new ContractsModel(createContract);
    const contract = await this.contractUseCase.create(contractToDomain);
    if (!contract) {
      throw new NotFoundException();
    }

    return new ContractsModel(contract);
  }

  @Put()
  public async updateStatus(
    @Body() updateContract: UpdateContractDto,
  ): Promise<ContractsModel> {
    if (!updateContract) {
      throw new BadRequestException();
    }
    const userToDomain = new ContractsModel(updateContract);
    const user = await this.contractUseCase.updateContract(userToDomain);
    if (!user) {
      throw new NotFoundException();
    }
    return new ContractsModel(user);
  }
}
