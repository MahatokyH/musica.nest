/* eslint-disable prettier/prettier */

import { IsEmpty } from 'class-validator';

export class MusicDto {
  singer: string[];
  title: string;
  dateOut: Date;
  @IsEmpty()
  musicId: string;
  @IsEmpty()
  albumId: string;
}
