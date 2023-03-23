/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MusicDto } from '../../DTO/music.dto';
import { Music } from '../../Schemas/music.schema';
import { MusicService } from '../../Services/music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}
  @Get()
  @HttpCode(200)
  async getMusics(): Promise<Music[]> {
    return this.musicService.getMusics();
  }
  @Get(':id')
  @HttpCode(200)
  async getMusic(@Param('id') id: string): Promise<Music> {
    return this.musicService.getMusicById(id);
  }

  @Post()
  @HttpCode(201)
  async createMusic(@Body() body: MusicDto): Promise<Music> {
    return this.musicService.createMusic(body);
  }
  @Put(':id')
  @HttpCode(200)
  async updateMusic(
    @Param('id') id: string,
    @Body() body: MusicDto,
  ): Promise<Music> {
    return this.musicService.updateMusic(id, body);
  }
}
