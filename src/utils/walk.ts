export function walk<T extends any[] | string>(
  target: T,
  handler: (item: ArrayItemType<T>) => void
) {
  const length = target.length;
  for (let i = 0; i < length; i++) {
    handler(target[i]);
  }
}
