import { pair } from "./pair";

test("pair", () => {
  expect(pair("(a*b(c+d))", "(", ")")).toEqual(["a*b(c+d)"]);
  expect(pair(pair("(a*b(c+d))", "(", ")")[0], "(", ")")).toEqual(["c+d"]);
  expect(pair("(a*b[c+d])", "[", "]")).toEqual(["c+d"]);
});
