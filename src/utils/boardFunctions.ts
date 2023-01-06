import { isOdd } from "@/utils/generalFunctions";
import { movePawn } from "@/utils/pawnFunctions";
import { moveRook } from "@/utils/rookFunctions";

export type TPieces =
  | "p"
  | "r"
  | "n"
  | "b"
  | "q"
  | "k"
  | "P"
  | "R"
  | "N"
  | "B"
  | "Q"
  | "K"
  | 0;

export const initialPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export const isDarkSquare = (index: number) => {
  const oddRow = isOdd(Math.floor(index / 10));
  const oddColumn = isOdd(index % 10);

  if (!oddRow && oddColumn) return false;
  if (oddRow && !oddColumn) return false;

  return true;
};

export const createLabel = (index: number) => {
  const row = 8 - (Math.floor(index / 10) - 2);
  const column = String.fromCharCode(96 + (index % 10));


  return `${column}${row}`;
};

export const fenToArr = (fen: string) => {
  return fen.split("/").map((row) => {
    return row
      .split("")
      .map((piece) => {
        if (piece === "1") return 0;
        if (piece === "2") return [0, 0];
        if (piece === "3") return [0, 0, 0];
        if (piece === "4") return [0, 0, 0, 0];
        if (piece === "5") return [0, 0, 0, 0, 0];
        if (piece === "6") return [0, 0, 0, 0, 0, 0];
        if (piece === "7") return [0, 0, 0, 0, 0, 0, 0];
        if (piece === "8") return [0, 0, 0, 0, 0, 0, 0, 0];
        return piece;
      })
      .flat();
  }) as TPieces[][];
};

export const fenToBoard = (fen: string) => {
  const board = Array(120).fill(0);
  const startingArr = fenToArr(fen);
  return board.map((_, index) => {
    if (index < 21 || index > 98) return 0;
    if (index % 10 === 0 || index % 10 === 9) return 0;
    const column = (index % 10) - 1;
    const row = startingArr[Math.floor(index / 10) - 2];
    return row ? row[column] : 0;
  }) as TPieces[];
};

export const createBoard = () => fenToBoard(initialPosition);

export const isOutOfBounds = (index: number) => {
  if (index < 21 || index > 98) return true;
  if (index % 10 === 0 || index % 10 === 9) return true;
  return false;
};

export const isSameColor = (fromPiece: TPieces, toPiece: TPieces) => {
  if (fromPiece === 0 || toPiece === 0) return false;
  if (fromPiece === fromPiece.toUpperCase()) {
    return toPiece === toPiece.toUpperCase();
  }
  return toPiece === toPiece.toLowerCase();
};

export const movePieceAnywhere = (
  board: TPieces[],
  from: number,
  to: number
) => {
  const newBoard = [...board];
  if (isOutOfBounds(to)) return newBoard;
  const fromPiece = newBoard[from] ?? 0;
  const toPiece = newBoard[to] ?? 0;

  if (isSameColor(fromPiece, toPiece)) return newBoard;

  newBoard[to] = newBoard[from] ?? 0;
  newBoard[from] = 0;
  return newBoard;
};

export const boardToFen = (board: TPieces[]) => {
  const splitter = (lower: number, upper: number) => {
    return board
      .slice(lower, upper)
      .map((p) => (p === 0 ? "1" : p))
      .join("");
  };

  const arr: string[] = [];
  for (let i = 2; i < 10; i++) {
    arr.push(splitter(i * 10 + 1, i * 10 + 10 - 1));
  }

  return arr.join("/");
};

export const movePiece = (board: TPieces[], from: number, to: number) => {
  const piece = board[from];
  if (piece === "p" || piece === "P") return movePawn(board, from, to)
  if (piece === "r" || piece === "R") return moveRook(board, from, to)
  return movePieceAnywhere(board, from, to);
};

export const isOccupied = (board: TPieces[], index: number) => {
  return board[index] !== 0;
};
