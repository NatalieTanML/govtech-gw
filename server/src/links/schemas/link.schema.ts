import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LinkDocument = HydratedDocument<Link>;

@Schema()
export class Link {
  @Prop({ required: true })
  shortUrl: string;

  @Prop({ required: true })
  longUrl: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
