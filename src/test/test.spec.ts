import { test2 } from "./test2";
import { walk } from "./test3";

test("log", () => {
  console.log = jest.fn();
  walk([1, 12, "aa"], test2);

  expect((console.log as jest.Mock).mock.calls).toEqual([]);
});
