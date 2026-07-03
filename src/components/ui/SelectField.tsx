import { cn } from "@/lib/cn";

export interface ISelectOption {
  label: string;
  value: string;
}

interface ISelectFieldProps {
  label: string;
  value: string;
  options: ISelectOption[];
  onChange: (value: string) => void;
  className?: string;
}

export function SelectField({
  label,
  value,
  options,
  onChange,
  className,
}: ISelectFieldProps) {
  return (
    <label className={cn("space-y-1.5", className)}>
      <span className="text-label text-foreground">{label}</span>
      <select
        value={value}
        className={cn(
          "h-9 min-w-36 rounded-md border border-input bg-background px-3",
          "text-sm text-foreground focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring",
        )}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
