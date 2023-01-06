import { fenToBoard } from "@/utils/boardFunctions";
import { moveRook } from "@/utils/rookFunctions";

test("rook can move horizontally", () => {
  const board = fenToBoard("r1bqkbnr/pPpppppp/11n11111/11R11111/11111111/11111111/P1PPPPPP/1NBQKBNR");

  const newBoard = moveRook(board, 53)(58);

  expect(newBoard[58]).toBe("R");
});