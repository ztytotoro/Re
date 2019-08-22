export function pair(left: string, right = left) {
  const pairStack: string[] = [];
  const result: string[] = [];
  let t = '';
  return (item: string) => {
    if (item === left && pairStack.length === 0) {
      pairStack.push(item);
      return result;
    }
    if (item === right) {
      const pop = pairStack[pairStack.length - 1];
      if (pop === left) {
        pairStack.pop();
        if (pairStack.length === 0) {
          result.push(t);
          t = '';
        }
      }
    } else if (item === left) {
      pairStack.push(item);
    }
    if (pairStack.length > 0) {
      t += item;
    }
    return result;
  };
}
