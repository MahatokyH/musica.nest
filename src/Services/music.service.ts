/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MusicDto } from '../DTO/music.dto';
import { v4 as uuidv4 } from 'uuid';
import { MusicRepository } from '../Repositories/music.repository';
import { Music } from '../Schemas/music.schema';

@Injectable()
export class MusicService {
  constructor(private readonly musicRepository: MusicRepository) {}
  async getMusicById(musicId: string): Promise<Music> {
    return this.musicRepository.findOne({ musicId });
  }

  async getMusics(): Promise<Music[]> {
    return this.musicRepository.find({});
  }

  async createMusic(musicDto: MusicDto): Promise<Music> {
    return this.musicRepository.create({
      singer: musicDto.singer,
      title: musicDto.title,
      dateOut: musicDto.dateOut,
      musicId: uuidv4(),
    });
  }

  async updateMusic(musicId: string, musicDto: MusicDto): Promise<Music> {
    return this.musicRepository.findOneAndUpdate(
      {
        musicId,
      },
      musicDto,
    );
  }
}
