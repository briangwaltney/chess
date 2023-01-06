import React from "react";
import clsx from "clsx";
import Piece from "@/components/Piece";
import type {
  TPieces} from "@/utils/boardFunctions";
import {
  boardToFen,
  createBoard,
  createLabel,
  fenToBoard,
  isDarkSquare,
  movePiece
} from "@/utils/boardFunctions";

export default function Board() {
  const allSquares = Array(120).fill(null);
  const playableSquares = allSquares
    .map((_, index) => ({
      index,
      label: createLabel(index),
      dark: isDarkSquare(index),
    }))
    .filter((_, index) => {
      if (index > 20 && index < 99 && index % 10 !== 0 && index % 10 !== 9) {
        return index;
      }
      return null;
    });

  const testPosition = fenToBoard(
    "r1bqkbnr/pPpppppp/2n5/8/8/8/P1PPPPPP/RNBQKBNR"
  );

  const initialPosition = createBoard();
  const [board, setBoard] = React.useState(testPosition);
  const [moveFrom, setMoveFrom] = React.useState<number | null>(null);

  const handleMove = (to: number) => {
    setBoard(movePiece(board, moveFrom ?? 0, to));
    setMoveFrom(null);
  };

  return (
    <div data-testid="chessBoard" className={clsx([""])}>
      <p>{boardToFen(board)}</p>
      <div className={clsx(["grid", "grid-cols-8"])}>
        {playableSquares.map((square, index) => {
          return (
            <div
              key={index}
              className={clsx([
                "w-20",
                "h-20",
                "border",
                "flex",
                "flex-col",
                "border-sky-600",
                square.dark
                  ? ["bg-sky-600"]
                  : ["bg-neutral-100", "text-sky-600"],
                square.index === moveFrom && ["bg-red-400", "text-neutral-100"],
              ])}
            >
              <Piece
                onClick={
                  moveFrom
                    ? () => handleMove(square.index)
                    : () => setMoveFrom(square.index)
                }
                piece={board[square.index] as TPieces}
              />
              <p className={clsx(["text-xs", "pl-1"])}>
                {square.label}/{square.index}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
