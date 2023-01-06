import type { TPieces } from "@/utils/boardFunctions";
import { movePieceAnywhere } from "@/utils/boardFunctions";

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
