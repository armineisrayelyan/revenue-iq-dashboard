interface IWelcomeSectionProps {
  name: string;
  currentDate: string;
  message: string;
}

export function WelcomeSection({
  name,
  currentDate,
  message,
}: IWelcomeSectionProps) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-caption font-medium uppercase tracking-wide text-muted-foreground">
            {currentDate}
          </p>
          <h1 className="mt-2 text-display text-foreground">
            Good morning, {name} 👋
          </h1>
        </div>
        <p className="max-w-md text-sm text-muted-foreground md:text-right">
          {message}
        </p>
      </div>
    </section>
  );
}
