import { splitArrayBy } from './redux-test';

test('splitArrayBy', () => {
  const arr = [1, 2, 3];
  const expected = [[1], [2, 3]];
  const result = splitArrayBy(arr, el => el === 2);
  expect(result).toEqual(expected);
});
