import { createBoard, fenToBoard, moveUniquePiece } from "@/utils/boardFunctions";
import { movePawn } from "@/utils/pawnFunctions";

test("pawn can move 1 square", () => {
  const board = movePawn(createBoard(), 81)(71);
  const newBoard = movePawn(board, 34)(44);

  expect(newBoard[71]).toBe("P");
  expect(newBoard[44]).toBe("p");
});

test("pawn can move 2 squares on first move", () => {
  const board = movePawn(createBoard(), 81)(61);
  const newBoard = movePawn(board, 34)(54);
  expect(newBoard[61]).toBe("P");
  expect(newBoard[54]).toBe("p");
});

test("pawn cannot move 2 squares on second move", () => {
  const board = movePawn(createBoard(), 81)(61);
  const newerBoard = movePawn(board, 61)(41);
  const testPosition = fenToBoard(
    "r1bqkbnr/pPpppppp/2n5/8/8/8/P1PPPPPP/RNBQKBNR"
  );
  const newTestPosition = movePawn(testPosition, 32)(12);
  expect(newerBoard[61]).toBe("P");
  expect(newTestPosition[32]).toBe("P");
});

test("pawn can never move 3 squares", () => {
  const board = createBoard();
  const newBoard = movePawn(board, 31)(61);
  expect(newBoard[31]).toBe("p");
  expect(newBoard[61]).toBe(0);
});

test("non-pawns cannot use movePawn", () => {
  const board = createBoard();
  const newBoard = movePawn(board, 91)(81);
  expect(newBoard[91]).toBe("R");
  expect(newBoard[81]).toBe("P");
});


test("pawns cannot move through pieces", () => {
  const board = fenToBoard("rnbqkbnr/pppppppp/8/8/8/q7/PPPPPPPP/RNBQKBNR");
  const newBoard = movePawn(board, 81)(61);
  expect(newBoard[81]).toBe("P");
  expect(newBoard[71]).toBe("q");
});

test("pawn can capture diagonally", () => {
  const board = fenToBoard("rnbqkbnr/pppppppp/8/8/3b4/q1P5/PP1PPPPP/RNBQKBNR");
  const newBoard = movePawn(board, 82)(71);
  const nextBoard = movePawn(board, 73)(64);
  const board3 = movePawn(board, 88)(77);
  expect(newBoard[71]).toBe("P");
  expect(nextBoard[64]).toBe("P");
  expect(board3[88]).toBe("P");
});


test("pawn turns to queen", () => {
  const board = fenToBoard(
    "r1bqkbnr/pP1ppppp/11111111/11111111/11111111/111n1111/P1pPPPPP/RN1QKBNR"
  );

  const newBoard = moveUniquePiece(board[32])(board, 32)(22);
  const nextBoard = moveUniquePiece(board[83])(board, 83)(93);
  expect(newBoard[22]).toBe("Q");
  expect(nextBoard[93]).toBe("q");

});
