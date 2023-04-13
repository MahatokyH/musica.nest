import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumController } from 'src/Controller/album/album.controller';
import { Album, AlbumSchema } from 'src/Schemas/album.schema';
import { AlbumService } from 'src/Services/album/album.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
      ],
      providers: [AlbumService],
      controllers: [AlbumController],
})
export class AlbumModule {}
