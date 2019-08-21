import { walk } from './walk';

test('walk', () => {
  const mock = jest.fn(x => x);

  walk('123456789', mock);
  expect(mock.mock.results[8].value).toBe('9');

  mock.mockClear();

  walk([1, 3, 5], mock);
  expect(mock.mock.results[1].value).toBe(3);
});
