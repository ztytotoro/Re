import { walk } from 'src/utils/walk';
import { end } from '../end';

test('begin', () => {
  expect(walk('acc12333', end('12333'))).toEqual([true]);
  expect(walk('acc12333', end('1233'))).toEqual([false]);
});
