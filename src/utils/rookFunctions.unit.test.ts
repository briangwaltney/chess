import { fenToBoard, movePiece } from "@/utils/boardFunctions";

test("rook can move horizontally", () => {
  const board = fenToBoard("8/8/8/4R3/8/8/8/8");

  const newBoard = movePiece(board, 55, 51);

  expect(newBoard[51]).toBe("R");
});

test("rook can move vertically", () => {
  const board = fenToBoard("8/8/8/4r3/8/8/8/8");
  const newBoard = movePiece(board, 55, 95);
  expect(newBoard[95]).toBe("r");
})

test("rook cannot move diagonally", ()=>{
  const board = fenToBoard("8/8/8/4r3/8/8/8/8");
  const newBoard = movePiece(board, 55, 64);
  expect(newBoard[64]).toBe(0);
  expect(newBoard[55]).toBe("r");
})

test.todo("rook cannot move through pieces", ()=>{
  const board = fenToBoard("1nbqkbnr/pppppppp/11111111/111r1111/1111R111/11111111/PPPPPPPP/RNBQKBN1")

  const newBoard = movePiece(board, 65, 25);
  expect (newBoard[25]).toBe("k");
  expect (newBoard[65]).toBe("R");

})