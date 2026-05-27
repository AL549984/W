type StepCardProps = {
  index: number;
  title: string;
  children: React.ReactNode;
};

export function StepCard({ index, title, children }: StepCardProps) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
          {index}
        </div>
        <div>
          <h3 className="text-base font-semibold text-ink">{title}</h3>
          <div className="mt-2 text-sm leading-6 text-muted">{children}</div>
        </div>
      </div>
    </article>
  );
}
