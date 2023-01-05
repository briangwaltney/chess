import { isEven, isOdd } from "@/utils/generalFunctions";

test("isEven", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
})

test("isOdd",() => {
  expect(isOdd(2)).toBe(false);
  expect(isOdd(3)).toBe(true);
})