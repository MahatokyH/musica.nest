import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlbumDto } from 'src/DTO/album/create-album.dto';
import { UpdateAlbumDto } from 'src/DTO/album/update-album.dto';
import { IAlbum } from 'src/interface/album.interface';

@Injectable()
export class AlbumService {

    constructor(
        @InjectModel('Album') 
        private albumModel:Model<IAlbum>
        ) { }

        async createAlbum(createAlbumDto: CreateAlbumDto): Promise<IAlbum> {
            const newStudent = await new this.albumModel(createAlbumDto);
            return newStudent.save();
         }

         async updateAlbum(albumId: string, updateAlbumDto: UpdateAlbumDto): Promise<IAlbum> {
            console.log(albumId)
            const existingStudent = await  this.albumModel.findByIdAndUpdate(albumId, updateAlbumDto, { new: true });
           if (!existingStudent) {
             throw new NotFoundException(`Album #${albumId} not found`);
           }
           return existingStudent;
        }
        
        async getAllAlbums(): Promise<IAlbum[]> {
            const albumData = await this.albumModel.find();
            if (!albumData || albumData.length == 0) {
                throw new NotFoundException('Albums data not found!');
            }
            return albumData;
        }
    
        async getAlbum(albumId: string): Promise<IAlbum> {
            const existingAlbum = await  this.albumModel.findById(albumId).exec();
            if (!existingAlbum) {
             throw new NotFoundException(`Album #${albumId} not found`);
            }
            return existingAlbum;
         }
    
         async deleteAlbum(albumId: string): Promise<IAlbum> {
            const deletedAlbum = await this.albumModel.findByIdAndDelete(albumId);
           if (!deletedAlbum) {
             throw new NotFoundException(`Album #${albumId} not found`);
           }
           return deletedAlbum;
        }
}
