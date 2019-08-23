import { WordBase, ICharacterSet } from './base';

export class FuzzyWord extends WordBase {
  readonly isFuzzy = true;
  count!: number;
  match!: boolean;
  constructor(private characters: ICharacterSet) {
    super();

    this.reset();
  }

  next(character: string) {
    if (!this.match || !this.inRange) return;
    if (this.inCharacters(character)) {
      this.count++;
    } else {
      this.match = false;
    }
  }

  reset() {
    this.count = 0;
    this.match = true;
  }

  get inRange() {
    return (
      this.count >= this.characters.lengthRange.least &&
      this.count <= this.characters.lengthRange.most
    );
  }

  inCharacters(c: string) {
    return this.includesContains(c) && this.excludesNotContains(c);
  }

  includesContains(c: string) {
    if (this.characters.include === null) return true;
    if (this.characters.include !== null) {
      return this.characters.include.includes(c);
    }
  }

  excludesNotContains(c: string) {
    if (this.characters.exclude === null) return true;
    if (this.characters.exclude !== null)
      return !this.characters.exclude.includes(c);
  }
}
