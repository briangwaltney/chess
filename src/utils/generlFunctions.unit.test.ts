import { includesAll, isEven, isOdd } from "@/utils/generalFunctions";

test("isEven", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
})

test("isOdd",() => {
  expect(isOdd(2)).toBe(false);
  expect(isOdd(3)).toBe(true);
})

test("includes all", ()=>{
  const bigArray = [1,2,3,4,5,6,7,8,9,10];
  const smallArray = [1,2,3,4,5];
  expect(includesAll(bigArray, smallArray)).toBe(true);
})