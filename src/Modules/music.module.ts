/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MusicController } from '../Controller/music/music.controller';
import { MusicRepository } from '../Repositories/music.repository';
import { Music, MusicSchema } from '../Schemas/music.schema';
import { MusicService } from '../Services/music.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Music.name,
        schema: MusicSchema,
      },
    ]),
  ],
  controllers: [MusicController],
  providers: [MusicService, MusicRepository],
})
export class MusicModule {}
