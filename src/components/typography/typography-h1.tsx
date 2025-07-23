import { cn } from "@/lib/utils";

interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH1({
  className,
  children,
  ...props
}: TypographyH1Props) {
  return (
    <h1
      className={cn(
        "text-5xl/snug font-bold -tracking-1 lg:text-6xl/tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
