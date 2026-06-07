"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getArticleNav } from "@/lib/learn-tracks";

export function ArticleNav() {
  const pathname = usePathname();
  const nav = getArticleNav(pathname);
  if (!nav) return null;

  const { prev, next } = nav;
  if (!prev && !next) return null;

  return (
    <div className="border-t border-slate-200 mt-12 pt-6 flex items-center justify-between gap-4 text-sm">
      <div className="flex-1">
        {prev && (
          <Link
            href={prev.href}
            className="group flex items-center gap-2 text-slate-500 hover:text-teal-700 transition-colors"
          >
            <span className="text-lg group-hover:-translate-x-0.5 transition-transform">←</span>
            <span className="font-medium">{prev.title}</span>
          </Link>
        )}
      </div>
      <div className="flex-1 text-right">
        {next && (
          <Link
            href={next.href}
            className="group flex items-center justify-end gap-2 text-slate-500 hover:text-teal-700 transition-colors"
          >
            <span className="font-medium">{next.title}</span>
            <span className="text-lg group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
