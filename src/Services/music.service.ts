/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MusicDto } from '../DTO/music.dto';
import { v4 as uuidv4 } from 'uuid';
import { MusicRepository } from '../Repositories/music.repository';
import {
  plainToClass,
  plainToClassFromExist,
  plainToInstance,
} from 'class-transformer';
import { Music } from 'src/Schemas/music.schema';

@Injectable()
export class MusicService {
  constructor(private readonly musicRepository: MusicRepository) {}
  async getMusicById(musicId: string): Promise<Music> {
    const music = this.musicRepository.findOne({ musicId });
    // const dto = plainToClass(MusicDto, music);
    return music;
  }

  async getMusics(): Promise<Music[]> {
    const music = await this.musicRepository.find({});
    // const dto = plainToClass(MusicDto, music);
    return music;
  }

  async createMusic(musicDto: MusicDto): Promise<Music> {
    const music = this.musicRepository.create({
      singer: musicDto.singer,
      title: musicDto.title,
      dateOut: musicDto.dateOut,
      albumId: musicDto.albumId,
      musicId: uuidv4(),
    });
    // const dto = plainToClass(MusicDto, music);
    return music;
  }

  async updateMusic(musicId: string, musicDto: MusicDto): Promise<Music> {
    const music = this.musicRepository.findOneAndUpdate(
      {
        musicId,
      },
      musicDto,
    );
    // const dto = plainToClass(MusicDto, music);
    return music;
  }
}
