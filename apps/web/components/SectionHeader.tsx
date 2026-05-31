interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      {label && (
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
      {description && (
        <p className="mt-3 text-slate-500 text-lg max-w-2xl">{description}</p>
      )}
    </div>
  );
}
