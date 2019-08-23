export enum PatternType {
  Fuzzy = 'Fuzzy',
  Exact = 'Exact'
}

export interface IMatch {
  start: number;
  length: number;
  content(raw: string[]): string;
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
  abstract match: boolean;
  abstract reset(): void;
  abstract next(c: string): void;
}
