export function walk(list: any[], handler: Function) {
  const t = (function(this: any) {
    function add_1(val: number) {
      return val + 2;
    }
    return this;
  })();
  handler.bind(t);
  return list.map(x => handler(x));
}
