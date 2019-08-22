import { walk } from '../walk';

test('walk', () => {
  const mock = jest.fn(x => x);

  walk('123456789', mock);
  expect(mock.mock.results[8].value).toBe('9');

  mock.mockClear();

  walk([1, 3, 5], mock);
  expect(mock.mock.results[1].value).toBe(3);

  mock.mockClear();

  walk([], mock);
  expect(mock.mock.results.map(x => x.value)).toEqual([]);

  expect(walk([1, 3, 5], x => x, x => x + 1)).toEqual([5, 6]);
});
