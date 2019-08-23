export enum PatternType {
  Fuzzy = 'Fuzzy',
  Exact = 'Exact'
}

export interface IMatch {
  start: number;
  length: number;
  content(raw: string | string[]): string | string[];
}

export interface IPattern {
  type: PatternType;
  keepMatch: boolean;
  match: IMatch;
  pattern: string | ComposedPattern;
}

export type ComposedPattern = Array<IPattern>;

export interface ICharacterSet {
  include: string[] | null;
  exclude: string[] | null;
  lengthRange: ILengthRange;
}

export interface ILengthRange {
  least: number;
  most: number;
}

export abstract class WordBase {
  abstract readonly isFuzzy: boolean;
  abstract match: IMatch;
  abstract reset(): void;
  abstract next(c: string, index: number, raw: string | any[]): void;
}

export class Match implements IMatch {
  start: number;
  length: number;
  constructor({ start, length }: { start: number; length: number }) {
    this.start = start;
    this.length = length;
  }

  content(raw: string | string[]) {
    if (typeof raw === 'string') {
      return raw.substr(this.start, this.length);
    }
    return raw.slice(this.start, this.start + this.length);
  }
}
