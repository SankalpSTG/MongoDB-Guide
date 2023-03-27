
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Test {
  @Prop()
  field: string;
  
  @Prop()
  another_field: number;
  
  @Prop()
  some_other_field: boolean;
  
  @Prop()
  field_other_than_some_other_field: number;
}

export type TestDocument = HydratedDocument<Test>;

export const CatSchema = SchemaFactory.createForClass(Test);