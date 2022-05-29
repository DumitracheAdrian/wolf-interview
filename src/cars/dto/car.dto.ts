import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CarDto {
  @ApiProperty({
    description: 'Make',
    required: true,
    example: 'Audi',
  })
  @IsString()
  @IsNotEmpty()
  readonly make!: string;

  @ApiProperty({
    description: 'Model',
    required: true,
    example: 'A4',
  })
  @IsString()
  @IsNotEmpty()
  readonly model!: string;

  @ApiProperty({
    description: 'Year',
    required: true,
    minimum: 1900,
    maximum: 2022,
    example: 2014,
  })
  @IsInt()
  @IsNotEmpty()
  @Min(1900)
  @Max(2022)
  readonly year!: number;

  @ApiProperty({
    description: 'Mileage',
    required: false,
    minimum: 0,
    example: 100000,
    default: null,
  })
  @IsInt()
  @IsOptional()
  @Min(0)
  readonly mileage?: number;
}
