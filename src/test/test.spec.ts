import { test2 } from "./test2";
import { walk } from "./test3";

test("log", () => {
  expect(walk([1, 2], test2)).toEqual([3, 4]);
});
