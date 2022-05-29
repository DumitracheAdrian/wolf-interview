import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({ required: true })
  make!: string;

  @Prop({ required: true })
  model!: string;

  @Prop({ required: true })
  year!: number;

  @Prop()
  mileage?: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
