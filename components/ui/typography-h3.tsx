import { cn } from "@/lib/utils";
import * as React from "react";

interface TypographyH3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH3({
  className,
  children,
  ...props
}: TypographyH3Props) {
  return (
    <h3
      className={cn("text-2xl font-bold lg:text-3xl lg:-tracking-4", className)}
      {...props}
    >
      {children}
    </h3>
  );
}
