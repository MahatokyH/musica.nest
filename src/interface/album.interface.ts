import { Document } from 'mongoose';
export interface IAlbum extends Document{
    readonly titre: string;
    readonly dateDeSortie: Date;
    readonly Artiste: string;
    readonly Lecteur: string;
}