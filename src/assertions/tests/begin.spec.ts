import { walk } from 'src/utils/walk';
import { begin } from '../begin';

test('begin', () => {
  expect(walk('acc12333', begin('acc'))).toEqual([true]);
  expect(walk('acc12333', begin('acc2'))).toEqual([false]);
});
