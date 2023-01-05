import React from "react";
import clsx from "clsx";

type Props = {
  children?: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div
      data-testid="layout"
      className={clsx([
        "min-h-screen",
        "bg-neutral-800",
        "text-neutral-50",
        "flex",
        "justify-center",
        "items-center"
      ])}
    >
      {children}
    </div>
  );
}
