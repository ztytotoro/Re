export function walk(list: any[], handler: Function) {
  for (let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
      return handler(list[i]);
    }
    handler(list[i]);
  }
}
