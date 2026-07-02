import Image from "next/image";
import { cn } from "@/lib/cn";
import { avatarVariants, type TAvatarVariants } from "@/lib/variants/avatar";

interface IAvatarProps extends TAvatarVariants {
  name: string;
  src?: string;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Avatar({ name, src, size, className }: IAvatarProps) {
  if (src) {
    const dimension = size === "xs" ? 24 : size === "sm" ? 32 : size === "lg" ? 40 : size === "xl" ? 48 : 36;

    return (
      <Image
        src={src}
        alt={name}
        width={dimension}
        height={dimension}
        className={cn(
          avatarVariants({ size }),
          "object-cover",
          className,
        )}
      />
    );
  }

  return (
    <div
      aria-label={name}
      className={cn(avatarVariants({ size }), className)}
    >
      {getInitials(name)}
    </div>
  );
}

export { avatarVariants };
