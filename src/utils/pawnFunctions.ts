import type { TPieces } from "@/utils/boardFunctions";
import { isOccupied, movePieceAnywhere } from "@/utils/boardFunctions";

export const pawnMovementOptions = (board: TPieces[], from: number) => {
  if (board[from] !== "p" && board[from] !== "P") return [];
  const row = Math.floor(from / 10);
  const direction = board[from] === "p" ? 1 : -1;
  const squareOne = from + direction * 10;
  const squareOneOccupied = isOccupied(board, squareOne);
  const squareTwo = from + direction * 20;
  const squareTwoOccupied = isOccupied(board, squareTwo);
  const captureLeft = from + direction * 9;
  const captureLeftOccupied = isOccupied(board, captureLeft);
  const captureRight = from + direction * 11;
  const captureRightOccupied = isOccupied(board, captureRight);

  const forwardOne = !squareOneOccupied ? [squareOne] : [];
  const forwardTwo =
    !squareOneOccupied && !squareTwoOccupied && [3, 8].includes(row)
      ? [squareTwo]
      : [];
  const captureLeftSquare = captureLeftOccupied ? [captureLeft] : [];
  const captureRightSquare = captureRightOccupied ? [captureRight] : [];

  return [
    ...forwardOne,
    ...forwardTwo,
    ...captureLeftSquare,
    ...captureRightSquare,
  ].sort();
};

export const movePawn = (board: TPieces[], from: number, to: number) => {
  if (board[from] !== "p" && board[from] !== "P") return [...board];
  const newBoard = [...board];

  const moveOptions = pawnMovementOptions(newBoard, from);

  if (!moveOptions.includes(to)) return newBoard;

  if ([2, 9].includes(to)) {
    newBoard[from] = newBoard[from] === "p" ? "q" : "Q";
  }

  return movePieceAnywhere(newBoard, from, to);
};
