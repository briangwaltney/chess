import {
  createBoard,
  createLabel,
  fenToBoard,
  isDarkSquare,
  movePawn,
  movePiece,
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
  expect(createLabel(21)).toBe("h1");
  expect(createLabel(28)).toBe("h8");
  expect(createLabel(31)).toBe("g1");
  expect(createLabel(32)).toBe("g2");
  expect(createLabel(41)).toBe("f1");
  expect(createLabel(42)).toBe("f2");
  expect(createLabel(91)).toBe("a1");
  expect(createLabel(98)).toBe("a8");
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
  const newBoard = movePiece(createBoard(), 81)(71);
  expect(newBoard[81]).toBe(0);
  expect(newBoard[71]).toBe("P");
});

test("piece cannot move out of bonds", () => {
  const newBoard = movePiece(createBoard(), 81)(80);
  expect(newBoard[81]).toBe("P");
  expect(newBoard[71]).toBe(0);
});

test("piece cannot move to occupied square of the same color", () => {
  const board = createBoard();
  const newBoard = movePiece(board, 91)(81);

  expect(newBoard[81]).toBe("P");
  expect(newBoard[91]).toBe("R");
});

test("pawn can move 1 square", () => {
  const board = movePawn(createBoard(), 81)(71);
  const newBoard = movePawn(board, 34)(44);

  expect(newBoard[81]).toBe(0);
  expect(newBoard[71]).toBe("P");
  expect(newBoard[34]).toBe(0);
  expect(newBoard[44]).toBe("p");
});

test("pawn can move 2 squares on first move", () => {
  const board = movePawn(createBoard(), 81)(61);
  const newBoard = movePawn(board, 34)(54);
  expect(newBoard[81]).toBe(0);
  expect(newBoard[61]).toBe("P");
  expect(newBoard[34]).toBe(0);
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
  expect(newerBoard[41]).toBe(0);
  expect(newTestPosition[32]).toBe("P");
  expect(newTestPosition[22]).toBe(0);
});

test("white pawn can never move 3 squares", () => {
  const board = createBoard();
  const newBoard = movePawn(board, 81)(51);
  expect(newBoard[81]).toBe("P");
  expect(newBoard[51]).toBe(0);
});


test("other pieces cannot use movePawn", () => {
  const board = createBoard();
  const newBoard = movePawn(board, 91)(81);
  expect(newBoard[91]).toBe("R");
  expect(newBoard[81]).toBe("P");
});
