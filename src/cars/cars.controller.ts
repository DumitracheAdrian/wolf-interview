import { createReadStream } from 'fs';
import { join } from 'path';
import {
  Controller,
  Get,
  Post,
  Body,
  StreamableFile,
  Res,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { Car } from './schemas/car.schema';

@Controller('cars')
@ApiTags('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @ApiOperation({ summary: 'Create car' })
  @ApiCreatedResponse({ description: 'Car successfully created' })
  @ApiBadRequestResponse({ description: 'Validation errors' })
  async create(@Body() carDto: CarDto): Promise<Car> {
    return this.carsService.create(carDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get cars' })
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Get('/download')
  @ApiOperation({ summary: 'Download cars PDF' })
  download(@Res({ passthrough: true }) response): StreamableFile {
    response.setHeader('Content-Type', 'application/pdf');
    response.setHeader('Content-Disposition', `attachment; filename=cars.pdf`);

    const fileStream = createReadStream(
      join(process.cwd(), 'public/pdf/cars.pdf'),
    );

    return new StreamableFile(fileStream);
  }
}
