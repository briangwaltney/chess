import type { HTMLAttributes } from "react";
import React from "react";
import type { VariantProps } from "cva";
import { cva } from "cva";

export const pieceClasses = cva(
  ["flex-1", "bg-contain", "bg-no-repeat", "bg-center"],
  {
    variants: {
      piece: {
        0: [],
        b: ["bg-b"],
        k: ["bg-k"],
        n: ["bg-n"],
        p: ["bg-p"],
        q: ["bg-q"],
        r: ["bg-r"],
        R: ["bg-R"],
        P: ["bg-P"],
        N: ["bg-N"],
        B: ["bg-B"],
        K: ["bg-K"],
        Q: ["bg-Q"],
      },
    },
  }
);

export type PieceType = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof pieceClasses>;

const Piece: React.FC<PieceType> = ({ piece, className, ...rest }) => {
  return <button className={pieceClasses({ piece, className })} {...rest} />;
};

export default Piece;
