export enum PatternType {
  Fuzzy = "Fuzzy",
  Exact = "Exact"
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
