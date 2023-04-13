/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MusicDocument = HydratedDocument<Music>;

@Schema()
export class Music {
  @Prop()
  musicId: string;

  @Prop([String])
  singer: string[];

  @Prop()
  title: string;

  @Prop()
  dateOut: Date;

  @Prop()
  albumId: string;
}

export const MusicSchema = SchemaFactory.createForClass(Music);
