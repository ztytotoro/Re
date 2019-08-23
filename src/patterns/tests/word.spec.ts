import { Word } from '../word';
import { traverse } from 'src/utils/traverse';

const testFactory = (wordStr: string, title = 'test') => (
  testStr: string,
  expectedResult: any
) => {
  test(title, () => {
    const word = new Word(wordStr);
    const result: string[] = [];
    word.result.subscribe(t => {
      result.push(t.content(testStr) as string);
    });
    traverse(testStr, word.next.bind(word));
    expect(result).toEqual(expectedResult);
  });
};

const testClass = testFactory('class');

testClass('class class', ['class', 'class']);
