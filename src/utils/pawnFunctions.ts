import type { TPieces } from "@/utils/boardFunctions";
import { isOccupied, movePieceAnywhere } from "@/utils/boardFunctions";

export const movePawn = (board: TPieces[], from: number, to: number) => {
  if (board[from] !== "p" && board[from] !== "P") return [...board];
  const newBoard = [...board];
  const row = Math.floor(from / 10);
  const direction = newBoard[from] === "p" ? 1 : -1;
  const squareOne = from + direction * 10;
  const squareTwo = from + direction * 20;
  const captureOne = from + direction * 9;
  const captureTwo = from + direction * 11;
  const captureSquares = [
    isOccupied(newBoard, captureOne) ? captureOne : 0,
    isOccupied(newBoard, captureTwo) ? captureTwo : 0,
  ];

  const newToOptions = [3, 8].includes(row)
    ? !isOccupied(newBoard, squareOne)
      ? [squareOne, squareTwo]
      : [squareOne]
    : [squareOne];

  if (![...newToOptions, ...captureSquares].includes(to)) return newBoard;


  if (Math.floor(to / 10) === 2 || Math.floor(to / 10) === 9) {
    newBoard[from] = newBoard[from] === "p" ? "q" : "Q";
  }

  return movePieceAnywhere(newBoard, from, to)
};