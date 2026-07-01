import { cn } from "@/lib/cn";

interface IAvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "h-8 w-8 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-10 w-10 text-base",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Avatar({ name, size = "md", className }: IAvatarProps) {
  return (
    <div
      aria-label={name}
      className={cn(
        "flex items-center justify-center rounded-full bg-primary font-medium text-primary-foreground ring-2 ring-border",
        sizeStyles[size],
        className,
      )}
    >
      {getInitials(name)}
    </div>
  );
}
