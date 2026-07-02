import { cn } from "@/lib/cn";

interface IPageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: IPageHeaderProps) {
  return (
    <header className={cn("mb-8", className)}>
      <h1 className="text-heading text-foreground">{title}</h1>
      {description ? (
        <p className="mt-1 text-caption text-muted-foreground">{description}</p>
      ) : null}
    </header>
  );
}
