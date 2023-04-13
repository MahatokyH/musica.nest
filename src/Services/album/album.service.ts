/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { AlbumDto } from 'src/DTO/album/album.dto';
import { AlbumRepository } from 'src/Repositories/album.repository';
import { v4 as uuidv4 } from 'uuid';
import { plainToClass } from 'class-transformer';
import { Album } from 'src/Schemas/album.schema';

@Injectable()
export class AlbumService {
  constructor(private readonly albumRepository: AlbumRepository) {}

  async createAlbum(createAlbumDto: AlbumDto): Promise<Album> {
    const album = this.albumRepository.create({
      albumId: uuidv4(),
      titre: createAlbumDto.titre,
      dateDeSortie: createAlbumDto.dateDeSortie,
      artistes: createAlbumDto.artistes,
      descritption: createAlbumDto.descritption,
    });
    // const dto = plainToClass(AlbumDto, album);
    return album;
  }

  async updateAlbum(albumId: string, updateAlbumDto: AlbumDto): Promise<Album> {
    const album = this.albumRepository.findOneAndUpdate(
      { albumId },
      updateAlbumDto,
    );
    // const dto = plainToClass(AlbumDto, album);
    return album;
  }

  async getAllAlbums(): Promise<Album[]> {
    const albums = await this.albumRepository.find({});
    // const dto = plainToClass(AlbumDto, albums);
    return albums;
  }

  async getAlbum(albumId: string): Promise<Album> {
    const album = this.albumRepository.findOne({ albumId });
    // const dto = plainToClass(AlbumDto, album);
    return album;
  }

  async deleteAlbum(albumId: string): Promise<Album> {
    const album = this.albumRepository.findOneAndDelete({ albumId });
    // const dto = plainToClass(AlbumDto, album);
    return album;
  }
}
