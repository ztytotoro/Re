import { walk } from 'src/utils/walk';

export function pair<T extends string | unknown>(
  str: string,
  left: T,
  right = left
) {
  const pairStack = [];
  walk(str, item => {
    if (item === left) {
      pairStack.push(item);
    }
    if (item === left) {
    }
  });
}
