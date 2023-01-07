import {   fenToBoard, movePiece } from "@/utils/boardFunctions";
import { pawnMovementOptions } from "@/utils/pawnFunctions";

test("pawn move options from start are correct", ()=>{
  const board = fenToBoard("8/6p1/1p6/6R1/8/3rP3/2PPP3/8")
  const cannotMove = pawnMovementOptions(board, 84);
  const captureLeft = pawnMovementOptions(board, 85);
  const captureRight = pawnMovementOptions(board, 83);
  const oneForward = pawnMovementOptions(board, 42);
  const secondBlocked = pawnMovementOptions(board, 37);

  expect(cannotMove).toEqual([]);
  expect(captureLeft).toEqual([74]);
  expect(captureRight).toEqual([63, 73, 74]);
  expect(oneForward).toEqual([52]);
  expect(secondBlocked).toEqual([47]);


})

test("pawn turns to queen", () => {
  const board = fenToBoard(
    "r1bqkbnr/pP1ppppp/11111111/11111111/11111111/111n1111/P1pPPPPP/RN1QKBNR"
  );

  const newBoard = movePiece(board, 32, 22);
  const nextBoard = movePiece(board, 83, 93);
  expect(newBoard[22]).toBe("Q");
  expect(nextBoard[93]).toBe("q");
});
