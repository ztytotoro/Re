interface IPatternOption {
  keep: boolean;
  level: number;
}

export class Pattern implements IPatternOption {
  keep = false;
  level = 0;
  constructor(setOptions: (options: IPatternOption) => void) {
    setOptions(this);
  }
}

export function noGetMatch(pattern: Pattern) {
  pattern.keep = false;
}

export function getMatch(pattern: Pattern) {
  pattern.keep = true;
}

export function sortLevel(patterns: Pattern[]) {
  patterns.forEach((_, index) => {
    _.level = index;
  });
}
