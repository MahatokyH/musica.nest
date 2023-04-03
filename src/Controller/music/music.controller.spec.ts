/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { Music, MusicSchema } from '../../Schemas/music.schema';
import { MusicRepository } from '../..//Repositories/music.repository';
import { MusicDto } from '../../DTO/music.dto';
import { MusicService } from '../../Services/music.service';
import { MusicController } from './music.controller';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, Model, connect } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
// THE Injection Dependance are not okay for this test
describe('MusicController', () => {
  let controller: MusicController;
  let musicService: MusicService;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let musiceModel: Model<Music>;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    musiceModel = mongoConnection.model(Music.name, MusicSchema);

    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicController],
      providers: [
        MusicService,
        MusicRepository,
        { provide: getModelToken(Music.name), useValue: musiceModel },
      ],
    }).compile();
    controller = module.get<MusicController>(MusicController);
    musicService = module.get<MusicService>(MusicService);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });

  // afterEach(async () => {
  //   const collections = mongoConnection.collections;
  //   for (const key in collections) {
  //     const collection = collections[key];
  //     // console.log(collection);
  //     await collection.deleteMany({});
  //   }
  // });

  describe('create a music', () => {
    //jest.setTimeout(300000);
    it('should return a music add', async () => {
      const music = new Music();
      music.dateOut = new Date(Date.now());
      music.singer = ['Singer test'];
      music.title = 'Title test';
      const result = new Promise<Music>((resolve, rejects) => {
        resolve(music);
      });
      const dto = new MusicDto();
      dto.dateOut = new Date(Date.now());
      dto.singer = ['Singer test'];
      dto.title = 'Title test';
      // jest
      //   .spyOn(musicService, 'createMusic')
      //   .mockImplementation((dto) => result);
      expect((await controller.createMusic(dto)).singer).toStrictEqual(
        (await result).singer,
      );
    });
  });

  describe('get one', () => {
    //jest.setTimeout(300000);
    it('should return on music', async () => {
      // const result = new Promise<Music>((resolve, rejects) => {
      //   resolve(new Music());
      // });
      // jest
      //   .spyOn(musicService, 'getMusicById')
      //   .mockImplementation((musicId: 'XXXX-XXXX-XXXX') => result);
      expect(await controller.getMusic('XXXX-XXXX-XXXX')).toBe(null);
    });
  });

  describe('get all list', () => {
    it('should return all music', async () => {
      const result = new Promise<Music[]>((resolve, rejects) => {
        resolve([new Music(), new Music()]);
      });
      // jest.spyOn(musicService, 'getMusics').mockImplementation(() => result);
      expect((await controller.getMusics()).length).toBe(1);
    });
  });

  describe('update a music', () => {
    it('should return a music update', async () => {
      // const result = new Promise<Music>((resolve, rejects) => {
      //   resolve(new Music());
      // });
      const dto = new MusicDto();
      // jest
      //   .spyOn(musicService, 'updateMusic')
      //   .mockImplementation((musicId: 'XXXX-XXXX-XXXX', dto) => result);
      expect(await controller.updateMusic('XXXX-XXXX-XXXX', dto)).toBe(null);
    });
  });
});
