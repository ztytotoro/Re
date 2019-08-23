interface IPatternOption {
  keep: boolean;
}

export class Pattern implements IPatternOption {
  keep = false;
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
