import Link from "next/link";

interface LearningCardProps {
  title: string;
  description: string;
  href: string;
  topics?: string[];
}

export function LearningCard({ title, description, href, topics }: LearningCardProps) {
  return (
    <Link href={href} className="block h-full">
      <div className="bg-white border border-slate-200 rounded-xl p-6 h-full border-l-4 border-l-blue-500 hover:shadow-md hover:border-slate-300 transition-all">
        <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">{description}</p>
        {topics && topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {topics.map((t) => (
              <span key={t} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
