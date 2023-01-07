import type { TPieces } from "@/utils/boardFunctions";
import { isSameColor } from "@/utils/boardFunctions";
import { movePieceAnywhere } from "@/utils/boardFunctions";

export const rookMovementOptions = (board: TPieces[], from: number) => {
  if (board[from] !== "R" && board[from] !== "r") return [];
  const row = Math.floor(from / 10); //?
  const column = from % 10; //?

  const rowOptions = [];

  let i = column + 1; //?
  let active = true;

  const addHorizontal = (i: number) => {
    !isSameColor(board[from], board[10 * row + i]) &&
      rowOptions.push(10 * row + i);

    active = false;
  };

  while (active) {
    if (i > 8) {
      active = false;
      break;
    }
    if (board[10 * row + i] !== 0) {
      addHorizontal(i);
      break;
    }
    rowOptions.push(10 * row + i);
    i++;
  }

  i = column - 1;
  active = true;

  while (active) {
    if (i < 1) {
      active = false;
      break;
    }
    if (board[10 * row + i] !== 0) {
      addHorizontal(i);
      break;
    }
    rowOptions.push(10 * row + i);
    i--;
  }

  rowOptions;

  return rowOptions;
};

export const moveRook = (board: TPieces[], from: number, to: number) => {
  if (board[from] !== "R" && board[from] !== "r") return board;

  const isRow = Math.floor(from / 10) === Math.floor(to / 10);
  const direction = to > from ? 1 : -1;
  const multiplier = isRow ? 1 : 10;

  // console.log(from, to)
  // console.log(from + direction * multiplier)
  // console.log(from + direction * multiplier * 2)
  // console.log(from + direction * multiplier * 3)

  if (Math.floor(from / 10) === Math.floor(to / 10))
    return movePieceAnywhere(board, from, to);

  if (from % 10 === to % 10) return movePieceAnywhere(board, from, to);

  return board;
};
