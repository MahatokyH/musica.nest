import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './Controller/app.controller';
import { AppService } from './app.service';
import { MusicModule } from './Modules/music.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Musica'),
    MusicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
