import { fenToBoard, movePiece } from "@/utils/boardFunctions";
import { includesAll } from "@/utils/generalFunctions";
import { rookMovementOptions } from "@/utils/rookFunctions";

describe("Rook", () => {
  test("left movement options", ()=>{

    const board = fenToBoard(
      "rnbqkb11/pppppppp/11111111/111R1n11/1111111r/11111111/PPPPPPPP/RNBQKBN1"
    );
    const moveOptions = rookMovementOptions(board, 54);
    expect(includesAll(moveOptions,[55, 56])).toBe(true);
    expect(moveOptions.includes(57)).toBe(false)
  })

  test("right movement options", ()=>{

    const board = fenToBoard(
      "rnbqkb11/pppppppp/11111111/111R1n11/11111P1r/11111111/PPPPP1PP/RNBQKBN1"
    );
    const moveOptions = rookMovementOptions(board, 54);
    const blackRight = rookMovementOptions(board, 68)
    expect(includesAll(moveOptions,[51, 52, 53])).toBeTruthy();
    expect(includesAll(blackRight,[67, 66])).toBeTruthy();
    expect(blackRight.includes(65)).toBe(false)
  })


  test.skip("rook move options", () => {
    const board = fenToBoard(
      "rnbqkb1r/pppppppp/11111111/111R1n11/11111111/11111111/PPPPPPPP/RNBQKBN1"
    );
    const moveOptions = rookMovementOptions(board, 54);
    expect(moveOptions).toEqual([44, 51, 52, 53, 55, 56, 64, 74]);
  });

  test("rook can move horizontally", () => {
    const board = fenToBoard("8/8/8/4R3/8/8/8/8");

    const newBoard = movePiece(board, 55, 51);

    expect(newBoard[51]).toBe("R");
  });

  test("rook can move vertically", () => {
    const board = fenToBoard("8/8/8/4r3/8/8/8/8");
    const newBoard = movePiece(board, 55, 95);
    expect(newBoard[95]).toBe("r");
  });

  test("rook cannot move diagonally", () => {
    const board = fenToBoard("8/8/8/4r3/8/8/8/8");
    const newBoard = movePiece(board, 55, 64);
    expect(newBoard[64]).toBe(0);
    expect(newBoard[55]).toBe("r");
  });

  test.skip("rook cannot move through pieces", () => {
    const board = fenToBoard(
      "1nbqkbnr/pppppppp/11111111/111r1111/1111R111/11111111/PPPPPPPP/RNBQKBN1"
    );

    const newBoard = movePiece(board, 65, 25);
    expect(newBoard[25]).toBe("k");
    expect(newBoard[65]).toBe("R");
  });
});
