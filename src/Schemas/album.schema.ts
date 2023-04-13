import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema({ collection: 'album' })
export class Album {
   @Prop()
   titre: string;
   @Prop()
   dateDeSortie: Date;
   @Prop()
   Artiste: string;
   @Prop()
   Lecteur: string;
}
export const AlbumSchema = SchemaFactory.createForClass(Album);