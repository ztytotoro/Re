import { FuzzyWord } from '../fuzzyWord';
import { traverse } from 'src/utils/traverse';
import { ICharacterSet } from '../base';

const testFactory = (option: ICharacterSet, title = 'test') => (
  testStr: any,
  expectedResult: any
) => {
  test(title, async () => {
    const word = new FuzzyWord(option);
    const result: string[] = [];
    word.result.subscribe(t => {
      result.push(t.content(testStr) as string);
    });
    traverse(testStr, word.next.bind(word));
    expect(result).toEqual(expectedResult);
  });
};

const test1 = testFactory(
  {
    include: null,
    exclude: [' ', ','],
    lengthRange: {
      least: 2,
      most: Infinity
    }
  },
  'exclude space and comma, at least 2 character'
);

const test2 = testFactory(
  {
    include: null,
    exclude: [' ', ','],
    lengthRange: {
      least: 1,
      most: Infinity
    }
  },
  'exclude space and comma, at least 1 character'
);

test1('class a extends { }, class', ['class', 'extends', 'class']);
test2('class a extends { }, class', [
  'class',
  'a',
  'extends',
  '{',
  '}',
  'class'
]);
