export function traverse<T extends Target>(target: T, callback: Handler<T>) {
  const length = target.length;
  if (length > 0) {
    for (let i = 0; i < length; i++) {
      callback(target[i], i, target);
    }
  }
}
