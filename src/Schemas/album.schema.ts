/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop()
  albumId: string;

  @Prop()
  titre: string;

  @Prop()
  dateDeSortie: Date;

  @Prop()
  artistes: string[];

  @Prop()
  descritption: string;
}
export const AlbumSchema = SchemaFactory.createForClass(Album);
