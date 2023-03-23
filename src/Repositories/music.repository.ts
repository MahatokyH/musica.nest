/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { MusicDocument, Music } from '../Schemas/music.schema';

@Injectable()
export class MusicRepository {
  constructor(
    @InjectModel(Music.name) private musicModel: Model<MusicDocument>,
  ) {}

  async findOne(musicFilterQuery: FilterQuery<Music>): Promise<Music> {
    return this.musicModel.findOne(musicFilterQuery);
  }

  async find(musicFilterQuery: FilterQuery<Music>): Promise<Music[]> {
    return this.musicModel.find(musicFilterQuery);
  }

  async create(music: Music): Promise<Music> {
    const newMusic = new this.musicModel(music);
    return newMusic.save();
  }

  async findOneAndUpdate(
    musicFilterQuery: FilterQuery<Music>,
    music: Partial<Music>,
  ): Promise<Music> {
    return this.musicModel.findOneAndUpdate(musicFilterQuery, music);
  }
}
