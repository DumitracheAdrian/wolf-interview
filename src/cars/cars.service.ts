import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CarDto } from './dto/car.dto';
import { Car, CarDocument } from './schemas/car.schema';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async create(carDto: CarDto): Promise<Car> {
    const car = new this.carModel(carDto);

    return car.save();
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }
}
