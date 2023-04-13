export class Album {}
import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class CreateAlbumDto {
    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    titre: string;

    @IsNotEmpty()
    dateDeSortie: Date;
    
    @MaxLength(50)
    @IsNotEmpty()
    Artiste: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    Lecteur: string;
}