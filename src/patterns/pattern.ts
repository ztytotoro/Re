export type Pattern = Function;

enum PatternType {}

export interface IPattern {
  type: PatternType;
  pattern: IPattern[] | Pattern;
}
