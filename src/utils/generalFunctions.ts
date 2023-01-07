export const isEven = (num: number) => num % 2 === 0;

export const isOdd = (num: number) => num % 2 !== 0;

export const includesAll = (bigArray: number[], smallArray: number[]) =>
  smallArray.every((num) => bigArray.includes(num));