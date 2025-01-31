import { cn } from "@/lib/utils";
import * as React from "react";

interface TypographyH4Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH4({
  className,
  children,
  ...props
}: TypographyH4Props) {
  return (
    <h4 className={cn("text-base font-bold", className)} {...props}>
      {children}
    </h4>
  );
}
