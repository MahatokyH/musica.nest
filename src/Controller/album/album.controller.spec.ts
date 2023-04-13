import { Test, TestingModule } from '@nestjs/testing';
import { AlbumController } from './album.controller';
import { Album } from '../../Schemas/album.schema';
import { CreateAlbumDto } from '../../DTO/album/create-album.dto';

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
    album.Artiste = "Aurora";
    album.Lecteur = "Youtube";
    album.dateDeSortie = new Date(Date.now());
    const result = new Promise<Album>((resolve, rejects) => {
      resolve(album);
    });
    const dto = new CreateAlbumDto();
    dto.Artiste = "Aurora";
    dto.Lecteur = "Youtube";
    dto.dateDeSortie = new Date(Date.now());

    expect((await controller.createAlbum("",dto)).Artiste).toStrictEqual(
      (await result).Artiste,
    );
  });
});
