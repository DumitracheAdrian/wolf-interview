import {
  IsInt,
  IsNotEmpty, IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CarDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly make!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly model!: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  @Min(1900)
  @Max(2022)
  readonly year!: number;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  @Min(0)
  readonly mileage?: number;
}
