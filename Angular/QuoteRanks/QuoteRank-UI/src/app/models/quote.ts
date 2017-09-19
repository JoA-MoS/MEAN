import { IQuote } from './iquote';

export class Quote implements IQuote {
    public _id: string;
    public quoteText: string;
    public author: string;
    public votes: number;
}
