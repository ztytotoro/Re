import { get, set } from "./test1";

export function walk(list: any[], ...handlers: any[]) {
  list.forEach(item => {
    handlers.forEach(function(this: any, x) {
      const t = {
        vars: {
          b: 123
        }
      };

      get.bind(t);
      set.bind(t);

      x(item);
    });
  });
}
