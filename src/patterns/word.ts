import { WordBase } from './base';

// TODO: If keep word is set to true, keep the matched content as {start: number, legnth: number}, also support findAll
export class Word extends WordBase {
  readonly isFuzzy = false;
  index!: number;
  match!: boolean;
  constructor(private word: string) {
    super();
    this.reset();
  }

  next(character: string) {
    if (this.match) return;
    if (this.currentCharacter === character) {
      this.index++;
      if (this.index === this.word.length - 1) {
        this.match = true;
      }
    } else {
      this.index = 0;
    }
  }

  reset() {
    this.index = 0;
    this.match = false;
  }

  get currentCharacter() {
    return this.word[this.index];
  }
}
