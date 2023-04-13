/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Album, AlbumDocument } from 'src/Schemas/album.schema';

@Injectable()
export class AlbumRepository {
  constructor(
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
  ) {}

  async findOne(albumFilterQuery: FilterQuery<Album>): Promise<Album> {
    return this.albumModel.findOne(albumFilterQuery);
  }

  async find(albumFilterQuery: FilterQuery<Album>): Promise<Album[]> {
    return this.albumModel.find(albumFilterQuery);
  }

  async create(album: Album): Promise<Album> {
    const newAlbum = new this.albumModel(album);
    return newAlbum.save();
  }

  async findOneAndUpdate(
    albumFilterQuery: FilterQuery<Album>,
    music: Partial<Album>,
  ): Promise<Album> {
    return this.albumModel.findOneAndUpdate(albumFilterQuery, music);
  }

  async findOneAndDelete(albumFilterQuery: FilterQuery<Album>): Promise<Album> {
    return this.albumModel.findOneAndDelete(albumFilterQuery);
  }
}
