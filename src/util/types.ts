export interface Record {
    country: string;
    category: number;
}

export type Row = (string|number)[]

export type Map = {[country: string]: number[]}