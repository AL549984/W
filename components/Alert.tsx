import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

type AlertProps = {
  tone?: "info" | "warning" | "success";
  title: string;
  children: React.ReactNode;
};

const toneMap = {
  info: {
    icon: Info,
    className: "border-blue-200 bg-blue-50 text-blue-950"
  },
  warning: {
    icon: AlertTriangle,
    className: "border-amber-200 bg-amber-50 text-amber-950"
  },
  success: {
    icon: CheckCircle2,
    className: "border-emerald-200 bg-emerald-50 text-emerald-950"
  }
};

export function Alert({ tone = "info", title, children }: AlertProps) {
  const Icon = toneMap[tone].icon;

  return (
    <aside className={`rounded-lg border p-4 ${toneMap[tone].className}`}>
      <div className="flex gap-3">
        <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-semibold">{title}</p>
          <div className="mt-1 text-sm leading-6 opacity-90">{children}</div>
        </div>
      </div>
    </aside>
  );
}
