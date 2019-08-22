export function begin(str: string) {
  let result = true;
  return (step: string, index: number) => {
    if (index === 0) {
      result = true;
    }
    if (str[index] !== step && index < str.length) {
      result = false;
    }
    return result;
  };
}
