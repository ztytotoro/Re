import { WordBase, IMatch, Match } from './base';
import { Subject } from 'rxjs';

export class Word extends WordBase {
  readonly isFuzzy = false;
  index!: number;
  match!: IMatch;
  result: Subject<IMatch> = new Subject();
  constructor(private word: string) {
    super();
    this.reset();
  }

  next(character: string, index: number) {
    if (this.currentCharacter === character) {
      if (this.index === 0) {
        this.match.start = index;
      }
      this.index++;
      if (this.index === this.word.length) {
        this.match.length = this.index;
        this.result.next(this.match);
        this.reset();
      }
    } else {
      this.index = 0;
    }
  }

  reset() {
    this.index = 0;
    this.match = new Match({
      start: 0,
      length: 0
    });
  }

  get currentCharacter() {
    return this.word[this.index];
  }
}
