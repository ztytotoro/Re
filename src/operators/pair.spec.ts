import { walk } from 'src/utils/walk';
import { pair } from './pair';

test('pair', () => {
  expect(walk('(a*b(c+d))', pair('(', ')'))).toEqual([['a*b(c+d)']]);
  expect(walk('(a*b(c+d))(b+2)', pair('(', ')'))).toEqual([
    ['a*b(c+d)', 'b+2']
  ]);
  expect(walk('|a*b(c+d)|(b+2)', pair('|'))).toEqual([['a*b(c+d)']]);
});
