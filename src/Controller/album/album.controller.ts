import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateAlbumDto } from 'src/DTO/album/create-album.dto';
import { UpdateAlbumDto } from 'src/DTO/album/update-album.dto';
import { AlbumService } from 'src/Services/album/album.service';

@Controller('album')
export class AlbumController {

    constructor(private readonly albumService: AlbumService) { }

    @Post('/createAlbum')
   async createAlbum(@Res() response, @Body() createAlbumDto: CreateAlbumDto) {
    try{
            const newAlbum = await this.albumService.createAlbum(createAlbumDto);
            return response.status(HttpStatus.CREATED).json({
            message: 'Album has been created successfully',
            newAlbum,});
        } 
    catch(err){
                return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Album not created!',
                error: 'Bad Request'
                });
            }
    }

    @Put('updateAlbum/:id')
    async updateAlbum(@Res() response,@Param('id') AlbumId: string, @Body() updateAlbumDto: UpdateAlbumDto) {
        try {
            const existingAlbum = await this.albumService.updateAlbum(AlbumId, updateAlbumDto);
            return response.status(HttpStatus.OK).json({
            message: 'Album has been successfully updated',
            existingAlbum,});
        } 
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('getAllAlbum')
    async getAllalbum(@Res() response) {
        try {
            console.log("miditra get")
        const albumData = await this.albumService.getAllAlbums();
        return response.status(HttpStatus.OK).json({
        message: 'All Albums data found successfully',albumData,});
        } catch (err) {
        return response.status(err.status).json(err.response);
        }
    }

    @Get('findAlbum/:id')
    async getAlbum(@Res() response, @Param('id') albumId: string) {
        try {
            const existingAlbum = await
            this.albumService.getAlbum(albumId);
            return response.status(HttpStatus.OK).json({
            message: 'Album found successfully',existingAlbum,});
        } 
        catch (err) {
            
        return response.status(err.status).json(err.response);
        }
    }

    @Delete('deleteAlbum/:id')
    async deleteAlbum(@Res() response, @Param('id') albumId: string)
    {
        try {
            const deletedAlbum = await this.albumService.deleteAlbum(albumId);
            return response.status(HttpStatus.OK).json({
            message: 'Album deleted successfully',
            deletedAlbum,});
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }




}
