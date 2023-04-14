/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './Controller/app.controller';
import { AppService } from './app.service';
import { MusicModule } from './Modules/music.module';
import { AlbumModule } from './Modules/album/album.module';

let stringConnection = 'mongodb://localhost:27017';
let databaseName = 'Musica';
if ('MONGODB_CONNECTION' in process.env)
  stringConnection = process.env['MONGODB_CONNECTION'];
if ('DATABASE_NAME' in process.env) databaseName = process.env['DATABASE_NAME'];
@Module({
  imports: [
    MongooseModule.forRoot(stringConnection, { dbName: databaseName }),
    MusicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
