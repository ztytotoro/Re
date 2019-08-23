import { WordBase, ICharacterSet, IMatch, Match } from './base';
import { Subject } from 'rxjs';

export class FuzzyWord extends WordBase {
  readonly isFuzzy = true;
  count!: number;
  match!: IMatch;
  result: Subject<IMatch> = new Subject();
  constructor(private characters: ICharacterSet) {
    super();

    this.reset();
  }

  next(character: string, index: number, raw: string | any[]) {
    if (this.inCharacters(character)) {
      if (this.count === 0) {
        this.match.start = index;
      }
      this.count++;
      if (this.count === this.characters.lengthRange.most) {
        this.sendResult();
      }
      if (index === raw.length - 1) {
        this.sendResult();
      }
    } else {
      this.sendResult();
    }
  }

  reset() {
    this.count = 0;
    this.match = new Match({
      start: 0,
      length: 0
    });
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

  sendResult() {
    if (this.count > 0 && this.inRange) {
      this.match.length = this.count;
      this.result.next(this.match);
    }
    this.reset();
  }
}
