import { MongoMemoryServer } from "mongodb-memory-server";
import { Connection, Model,connect } from "mongoose";
import { Music,MusicSchema } from "src/Schemas/music.schema";

describe('MusicService Int', ()=>{
    let mongod: MongoMemoryServer;
    let mongoConnection: Connection;
    let musiceModel: Model<Music>;

    beforeAll(async () => {
        mongod = await MongoMemoryServer.create();
        const uri = mongod.getUri();
        mongoConnection = (await connect(uri)).connection;
        musiceModel = mongoConnection.model(Music.name, MusicSchema);
    });
    
    afterAll   (async ()=> {
        await mongoConnection.dropDatabase();
        await mongoConnection.close();
        await mongod.stop();
    });

    describe('create a music',()=>{

    });

    describe('get one',()=>{
        
    });

    describe('get all list',()=>{
        
    });

    describe('update a music',()=>{
        
    });

});

