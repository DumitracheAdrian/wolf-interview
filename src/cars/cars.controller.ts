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
import { ApiTags } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { Car } from './schemas/car.schema';

@Controller('cars')
@ApiTags('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  async create(@Body() carDto: CarDto): Promise<Car> {
    return this.carsService.create(carDto);
  }

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Get('/download')
  download(@Res({ passthrough: true }) response): StreamableFile {
    response.setHeader('Content-Type', 'application/pdf');
    response.setHeader('Content-Disposition', `attachment; filename=cars.pdf`);

    const fileStream = createReadStream(
      join(process.cwd(), 'public/pdf/cars.pdf'),
    );

    return new StreamableFile(fileStream);
  }
}
