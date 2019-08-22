import { pipe } from '../pipe';
import { begin, end } from 'src/assertions';

test('pipe', () => {
  const myTest = pipe(
    begin('http'),
    end('com')
  );
  expect(myTest.run('http://123.com')).toEqual([true, true]);
  expect(myTest.run('hhtp://123.com')).toEqual([false, true]);
  expect(myTest.run('http://123.comm')).toEqual([true, false]);
  expect(myTest.run('http://123.com')).toEqual([true, true]);
});
