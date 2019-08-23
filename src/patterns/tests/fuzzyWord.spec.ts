import { FuzzyWord } from '../fuzzyWord';
import { traverse } from 'src/utils/traverse';
import {} from 'rxjs';

test('Word', async () => {
  const testStr = 'class a extends { }, class';
  const word = new FuzzyWord({
    include: null,
    exclude: [' ', ','],
    lengthRange: {
      least: 1,
      most: Infinity
    }
  });
  const result: string[] = [];
  word.result.subscribe(t => {
    result.push(t.content(testStr) as string);
  });
  traverse(testStr, word.next.bind(word));
  expect(result).toEqual(['class', 'a', 'extends', '{', '}', 'class']);
});

test('Word', async () => {
  const testStr = 'class a extends { }, class';
  const word = new FuzzyWord({
    include: null,
    exclude: [' ', ','],
    lengthRange: {
      least: 2,
      most: Infinity
    }
  });
  const result: string[] = [];
  word.result.subscribe(t => {
    result.push(t.content(testStr) as string);
  });
  traverse(testStr, word.next.bind(word));
  expect(result).toEqual(['class', 'extends', 'class']);
});
