import { walk } from "src/utils/walk";

export function pair(str: string, left: string, right = left) {
  const pairStack: string[] = [];
  const result: string[] = [];
  let t = "";
  walk(str, item => {
    if (item === left) {
      pairStack.push(item);
      if (pairStack.length === 1) {
        return;
      }
    }
    if (item === right) {
      const pop = pairStack[pairStack.length - 1];
      if (pop === left) {
        pairStack.pop();
        if (pairStack.length === 0) {
          result.push(t);
          t = "";
        }
      }
    }
    if (pairStack.length > 0) {
      t += item;
    }
  });
  return result;
}
