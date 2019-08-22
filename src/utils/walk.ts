export function walk<T extends any[] | string>(
  target: T,
  ...handlers: ((item: ArrayItemType<T>) => void)[]
) {
  const length = target.length;
  if (length === 0) {
    return [];
  }
  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      return handlers.map(handler => handler(target[i]));
    }
    handlers.forEach(handler => handler(target[i]));
  }
}
