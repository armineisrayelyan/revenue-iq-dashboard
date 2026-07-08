import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface IMobileDataCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface IMobileDataRowProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

export function MobileDataCard({
  children,
  className,
  ...props
}: IMobileDataCardProps) {
  return (
    <Card className={cn("md:hidden", className)} {...props}>
      <CardContent className="p-4">{children}</CardContent>
    </Card>
  );
}

export function MobileDataRow({ label, value, className }: IMobileDataRowProps) {
  return (
    <div className={className}>
      <p className="text-caption text-muted-foreground">{label}</p>
      <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}

export function MobileDataGrid({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 grid grid-cols-2 gap-3">{children}</div>;
}
