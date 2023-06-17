import { Controller, Get } from '@nestjs/common';
import { TestsService } from './tests.service';
import { PrismaService } from '../database/database.connection';

@Controller('test')
export class TestsController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly testsService: TestsService,
  ) {}
  @Get()
  public async getAll() {
    return await this.prisma.users.findMany();
  }
}
