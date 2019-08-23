import { Word } from '../word';
import { traverse } from 'src/utils/traverse';

test('Word', () => {
  const word = new Word('class');
  traverse('class a extends {}', word.next.bind(word));
  expect(word.match).toBe(true);
  word.reset();
  traverse('clss a extends {}', word.next.bind(word));
  expect(word.match).toBe(false);
});
