import { add_1 } from './test1';
import { walk } from './test3';

test('log', () => {
  expect(walk([1, 2], add_1())).toEqual([1, 2]);
});
