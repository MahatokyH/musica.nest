/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { AlbumDto } from '../../DTO/album/album.dto';
import { AlbumService } from '../../Services/album/album.service';
import { Album } from 'src/Schemas/album.schema';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  @HttpCode(201)
  async createAlbum(@Body() createAlbumDto: AlbumDto): Promise<Album> {
    return this.albumService.createAlbum(createAlbumDto);
  }

  @Put(':id')
  @HttpCode(200)
  async updateAlbum(
    @Param('id') AlbumId: string,
    @Body() updateAlbumDto: AlbumDto,
  ): Promise<Album> {
    return this.albumService.updateAlbum(AlbumId, updateAlbumDto);
  }

  @Get()
  @HttpCode(200)
  async getAllalbum(): Promise<Album[]> {
    return this.albumService.getAllAlbums();
  }

  @Get(':id')
  @HttpCode(200)
  async getAlbum(@Param('id') albumId: string): Promise<Album> {
    return this.albumService.getAlbum(albumId);
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteAlbum(
    @Res() response,
    @Param('id') albumId: string,
  ): Promise<Album> {
    return this.albumService.deleteAlbum(albumId);
  }
}
