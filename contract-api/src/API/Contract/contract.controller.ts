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
    const contracts = await this.contractUseCase.getAll();
    if (!contracts) {
      throw new NotFoundException();
    }
    return contracts.map((el) => new ContractsModel(el));
  }

  @Get(':id')
  @HttpCode(200)
  public async getOne(@Param('id') id: number): Promise<ContractsModel> {
    const contract = await this.contractUseCase.getOne(+id);
    if (!contract) {
      throw new NotFoundException();
    }
    return new ContractsModel(contract);
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
  public async updateContract(
    @Body() updateContract: UpdateContractDto,
  ): Promise<ContractsModel> {
    if (!updateContract) {
      throw new BadRequestException();
    }
    const contractToDomain = new ContractsModel(updateContract);
    const contract = await this.contractUseCase.updateContract(
      contractToDomain,
    );
    if (!contract) {
      throw new NotFoundException();
    }
    return new ContractsModel(contract);
  }
}
