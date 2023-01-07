import {
  boardToFen,
  createBoard,
  createLabel,
  fenToBoard,
  isDarkSquare,
  isOccupied,
  movePieceAnywhere,
} from "@/utils/boardFunctions";

test("isDarkSquare", () => {
  expect(isDarkSquare(21)).toBe(false);
  expect(isDarkSquare(22)).toBe(true);
  expect(isDarkSquare(31)).toBe(true);
  expect(isDarkSquare(32)).toBe(false);
  expect(isDarkSquare(41)).toBe(false);
  expect(isDarkSquare(42)).toBe(true);
});

test("create label", () => {
  expect(createLabel(21)).toBe("a8");
  expect(createLabel(28)).toBe("h8");
  expect(createLabel(31)).toBe("a7");
  expect(createLabel(32)).toBe("b7");
  expect(createLabel(41)).toBe("a6");
  expect(createLabel(42)).toBe("b6");
  expect(createLabel(91)).toBe("a1");
  expect(createLabel(98)).toBe("h1");
});

test("FEN to board", () => {
  const fen = "r1bk3r/0p2p1pNpp2p1pNp/n2B4/1p1NP2P/6P1/3P1Q2/P1P1K3/q5b1";

  const board = fenToBoard(fen);
  expect(board.length).toBe(120);
  expect(board[21]).toBe("r");
  expect(board[22]).toBe(0);
  expect(board[23]).toBe("b");
  expect(board[24]).toBe("k");
  expect(board[91]).toBe("q");
});

test("initial position", () => {
  const board = createBoard();

  expect(board.length).toBe(120);
  expect(board[21]).toBe("r");
  expect(board[22]).toBe("n");
  expect(board[23]).toBe("b");
  expect(board[38]).toBe("p");
  expect(board[41]).toBe(0);
  expect(board[81]).toBe("P");
  expect(board[98]).toBe("R");
});

test("move position", () => {
  const newBoard = movePieceAnywhere(createBoard(), 81, 71);
  expect(newBoard[81]).toBe(0);
  expect(newBoard[71]).toBe("P");
});

test("piece cannot move out of bonds", () => {
  const newBoard = movePieceAnywhere(createBoard(), 81, 80);
  expect(newBoard[81]).toBe("P");
});

test("piece cannot move to occupied square of the same color", () => {
  const board = createBoard();
  const newBoard = movePieceAnywhere(board, 91,81);

  expect(newBoard[81]).toBe("P");
  expect(newBoard[91]).toBe("R");
});

test("isOccupied", () => {
  const board = createBoard();
  expect(isOccupied(board, 81)).toBe(true);
  expect(isOccupied(board, 71)).toBe(false);
});

test("board arr to FEN", () => {
  const board = createBoard();
  const fen = boardToFen(board);

  expect(fen).toBe(
    "rnbqkbnr/pppppppp/11111111/11111111/11111111/11111111/PPPPPPPP/RNBQKBNR"
  );
});
