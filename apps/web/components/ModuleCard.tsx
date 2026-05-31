import Link from "next/link";
import { StatusBadge } from "./StatusBadge";

type Status = "Live" | "In Progress" | "Planned";

interface ModuleCardProps {
  title: string;
  description: string;
  status: Status;
  href?: string;
}

export function ModuleCard({ title, description, status, href }: ModuleCardProps) {
  const content = (
    <div className="bg-white border border-slate-200 rounded-xl p-6 h-full border-l-4 border-l-teal-500 hover:shadow-md hover:border-slate-300 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-slate-900 font-mono text-sm">{title}</h3>
        <StatusBadge status={status} />
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
  if (href) return <Link href={href} className="block h-full">{content}</Link>;
  return content;
}
