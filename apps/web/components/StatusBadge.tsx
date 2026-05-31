type Status = "Live" | "In Progress" | "Planned";

const styles: Record<Status, string> = {
  "Live":        "bg-green-100 text-green-700",
  "In Progress": "bg-teal-100 text-teal-700",
  "Planned":     "bg-slate-100 text-slate-500",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[status]}`}>
      {status}
    </span>
  );
}
