import type { VariantProps } from "cva";
import { cva } from "cva";
import type { ButtonHTMLAttributes } from "react";

export const button = cva(
  [
    "inline-flex",
    "items-center",
    "border",
    "border-transparent",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-1",
    "transition",
    "duration-300",
    "ease-in-out",
    "shadow-base-300",
    "dark:shadow-base-500",
    "justify-center",
    "font-medium"
  ],
  {
    variants: {
      size: {
        none: [],
        xs: ["px-2.5", "py-1.5", "text-xs"],
        sm: ["px-3", "py-2", "text-sm", "leading-4"],
        md: ["px-4", "py-2", "text-sm"],
        lg: ["px-4", "py-2", "text-base"],
        xl: ["px-6", "py-3", "text-base"],
      },
      rounded: {
        none: [],
        sm: ["rounded-sm"],
        md: ["rounded-md"],
        lg: ["rounded-lg"],
        full: ["rounded-full"],
      },
      color: {
        none: [
          "enabled:hover:bg-base-100",
          "dark:enabled:hover:bg-base-800",
          "focus:ring-base-200",
          "dark:focus:ring-base-700",
        ],
        primary: [
          "text-white",
          "bg-primary-400",
          "enabled:hover:bg-primary-500",
          "focus:ring-sky-500",
        ],
        secondary: [
          "focus:ring-secondary-500",
          "text-white",
          "bg-secondary-600",
          "enabled:hover:bg-secondary-700",
        ],
        tertiary: [
          "focus:ring-tertiary-500",
          "text-white",
          "bg-tertiary-600",
          "enabled:hover:bg-tertiary-700",
        ],
        warning: [
          "focus:ring-warning-500",
          "text-white",
          "bg-warning-600",
          "enabled:hover:bg-warning-700",
        ],
        danger: [
          "focus:ring-danger-500",
          "text-white",
          "bg-danger-600",
          "enabled:hover:bg-danger-700",
        ],
      },
      disabled: {
        true: ["cursor-not-allowed", "opacity-60"],
      },
      shadow: {
        none: [],
        sm: ["drop-shadow", "enabled:hover:shadow-md"],
        md: ["drop-shadow-md", "enabled:hover:shadow-lg"],
        lg: ["drop-shadow-lg", "enabled:hover:shadow-xl"],
      },
    },
    defaultVariants: {
      size: "md",
      rounded: "md",
      color: "primary",
      shadow: "md",
    },
    compoundVariants: [],
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button: React.FC<ButtonProps> = ({
  className,
  size,
  color,
  rounded,
  shadow,
  disabled,
  ...props
}) => (
  <button
    data-mdb-ripple="true"
    data-mdb-ripple-color="dark"
    disabled={disabled}
    className={button({ size, disabled, className, color, rounded, shadow })}
    {...props}
  />
);
