import { Word } from '../word';
import { traverse } from 'src/utils/traverse';

test('Word', async () => {
  const word = new Word('class');
  const log = jest.fn();
  word.result.subscribe(t => {
    console.log(t);
    log(t);
  });
  traverse('class a extends {}, class', word.next.bind(word));
  traverse('clss a extends {}', word.next.bind(word));
});
