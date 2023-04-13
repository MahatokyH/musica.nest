/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class AlbumDto {
  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  titre: string;

  @IsNotEmpty()
  dateDeSortie: Date;

  @IsNotEmpty()
  artistes: string[];

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  descritption: string;
}
