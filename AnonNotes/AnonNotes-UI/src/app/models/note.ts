import { INote } from './inote';

export class Note implements INote {

    public noteText: string;
    public createdAt: Date;
}
