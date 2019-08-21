import { get, set } from "./test1";

export function test2(val: any) {
  if (get("a") === undefined) {
    set("a", []);
  } else {
    get("a").push(val);
  }
  console.log(get("a"));
  console.log(get("b"));
}
