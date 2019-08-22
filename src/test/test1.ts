export function add_1() {
  const result: any[] = [];
  return (val: number) => {
    result.push(val);
    return result;
  };
}
