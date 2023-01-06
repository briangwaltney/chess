import type { TPieces } from "@/utils/boardFunctions";
import { movePieceAnywhere } from "@/utils/boardFunctions";

export const moveRook = (board: TPieces[], from: number, to: number) => {
  return movePieceAnywhere(board, from, to)

}