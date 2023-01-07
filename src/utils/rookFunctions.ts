import type { TPieces } from "@/utils/boardFunctions";
import { isSameColor } from "@/utils/boardFunctions";
import { movePieceAnywhere } from "@/utils/boardFunctions";

export const rookMovementOptions = (board: TPieces[], from: number) => {
  if (board[from] !== "R" && board[from] !== "r") return [];

  return [...horizontalOptions(board, from)];
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

const horizontalOptions = (board: TPieces[], from: number) => {
  const row = Math.floor(from / 10);

  const result = [];
  for (let i = (from % 10) - 1; i > 0; i--) {
    if (board[10 * row + i] !== 0) {
      result.push(...addHorizontal(board, from, i));
      break;
    }
    result.push(10 * row + i);
  }
  for (let i = (from % 10) + 1; i < 9; i++) {
    if (board[10 * row + i] !== 0) {
      result.push(...addHorizontal(board, from, i));
      break;
    }
    result.push(10 * row + i);
  }
  return result;
};

const addHorizontal = (board: TPieces[], from: number, i: number) => {
  const row = Math.floor(from / 10);
  return !isSameColor(board[from], board[10 * row + i]) ? [10 * row + i] : [];
};
