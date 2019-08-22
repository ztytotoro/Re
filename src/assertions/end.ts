export function end(str: string) {
  let result = true;
  return (step: string, index: number, target: any[] | string) => {
    if (index === 0) {
      result = true;
    }
    if (
      str[index + str.length - target.length] !== step &&
      index >= target.length - str.length
    ) {
      result = false;
    }
    return result;
  };
}
