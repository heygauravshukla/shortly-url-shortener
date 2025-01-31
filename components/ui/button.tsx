import { cn } from "@/lib/utils";
import * as React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  size?: "md" | "lg" | "xl";
  rounded?: "md" | "lg" | "full";
  href?: string;
}

export default function Button({
  className,
  size = "md",
  rounded = "full",
  href,
  ...props
}: ButtonProps) {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={cn(
        "bg-cyan font-bold text-white transition-all hover:opacity-50",
        {
          md: "px-6 py-3 text-base -tracking-4 lg:py-2",
          lg: "px-6 py-3 text-lg lg:px-10 lg:py-4 lg:text-xl",
          xl: "px-10 py-4 text-xl",
        }[size],
        {
          md: "rounded-md",
          lg: "rounded-lg",
          full: "rounded-full",
        }[rounded],
        className,
      )}
      {...props}
    />
  );
}
