/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AlbumController } from './album.controller';
import { Album } from '../../Schemas/album.schema';
import { AlbumDto } from '../../DTO/album/album.dto';

describe('AlbumController', () => {
  let controller: AlbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumController],
    }).compile();

    controller = module.get<AlbumController>(AlbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

describe('create a album', () => {
  let controller: AlbumController;
  it('should return a album add', async () => {
    const album = new Album();
    album.artistes = ['Aurora'];
    album.descritption = 'Youtube';
    album.dateDeSortie = new Date(Date.now());
    const result = new Promise<Album>((resolve, rejects) => {
      resolve(album);
    });
    const dto = new AlbumDto();
    dto.artistes = ['Aurora'];
    dto.descritption = 'Youtube';
    dto.dateDeSortie = new Date(Date.now());

    expect((await controller.createAlbum(dto)).artistes).toStrictEqual(
      (await result).artistes,
    );
  });
});
