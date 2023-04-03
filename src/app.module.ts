import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './Controller/app.controller';
import { AppService } from './app.service';
import { MusicModule } from './Modules/music.module';

let stringConnection = 'mongodb://localhost:27017/Musica';
if ('MONGODB_CONNECTION' in process.env)
  stringConnection = process.env['MONGODB_CONNECTION'];
@Module({
  imports: [MongooseModule.forRoot(stringConnection), MusicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
