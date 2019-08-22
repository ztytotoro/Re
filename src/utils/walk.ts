export function walk<T extends Target>(target: T, ...handlers: Handler<T>[]) {
  const length = target.length;
  if (length === 0) {
    return [];
  }
  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      return handlers.map(handler => handler(target[i], i, target));
    }
    handlers.forEach(handler => handler(target[i], i, target));
  }
}
