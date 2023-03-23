/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { Music } from '../../Schemas/music.schema';
import { MusicRepository } from '../..//Repositories/music.repository';
import { MusicDto } from '../../DTO/music.dto';
import { MusicService } from '../../Services/music.service';
import { MusicController } from './music.controller';
// THE Injection Dependance are not okay for this test
describe('MusicController', () => {
  let controller: MusicController;
  let musicService: MusicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicController],
      providers: [MusicService, MusicRepository],
    }).compile();
    controller = module.get<MusicController>(MusicController);
    musicService = module.get<MusicService>(MusicService);
  });

  describe('get one', () => {
    it('should return on music', async () => {
      const result = new Promise<Music>((resolve, rejects) => {
        resolve(new Music());
      });
      jest
        .spyOn(musicService, 'getMusicById')
        .mockImplementation((musicId: 'XXXX-XXXX-XXXX') => result);
      expect(await controller.getMusic('XXXX-XXXX-XXXX')).toBe(result);
    });
  });

  describe('get all list', () => {
    it('should return all music', async () => {
      const result = new Promise<Music[]>((resolve, rejects) => {
        resolve([new Music(), new Music()]);
      });
      jest.spyOn(musicService, 'getMusics').mockImplementation(() => result);
      expect(await controller.getMusics()).toBe(result);
    });
  });

  describe('create a music', () => {
    it('should return a music add', async () => {
      const result = new Promise<Music>((resolve, rejects) => {
        resolve(new Music());
      });
      const dto = new MusicDto();
      jest
        .spyOn(musicService, 'createMusic')
        .mockImplementation((dto) => result);
      expect(await controller.createMusic(dto)).toBe(result);
    });
  });

  describe('update a music', () => {
    it('should return a music update', async () => {
      const result = new Promise<Music>((resolve, rejects) => {
        resolve(new Music());
      });
      const dto = new MusicDto();
      jest
        .spyOn(musicService, 'updateMusic')
        .mockImplementation((musicId: 'XXXX-XXXX-XXXX', dto) => result);
      expect(await controller.updateMusic('XXXX-XXXX-XXXX', dto)).toBe(result);
    });
  });
});
