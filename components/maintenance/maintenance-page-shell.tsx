import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { maintenanceTopics } from "@/content/maintenance/topics";
import type { MaintenanceTopicId } from "@/content/maintenance/types";

type MaintenancePageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  activeTopicId?: MaintenanceTopicId;
  schedule?: boolean;
  children: ReactNode;
};

export function MaintenancePageShell({ eyebrow, title, intro, activeTopicId, schedule = false, children }: MaintenancePageShellProps) {
  return (
    <div className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader currentPage="maintenance" />
      <main>
        <section className="border-b border-white/10">
          <div className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-9 sm:px-8 sm:pb-16 sm:pt-12 lg:px-10 lg:pb-20">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-white/45">
              <Link className="transition-colors hover:text-white" href="/">Home</Link>
              <span aria-hidden="true" className="text-white/20">/</span>
              <Link className="transition-colors hover:text-white" href="/maintenance">Maintenance</Link>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span className="text-white/70">{title}</span>
            </nav>
            <div className="mt-14 max-w-4xl sm:mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{eyebrow}</p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl lg:leading-[0.94]">{title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">{intro}</p>
            </div>
            <nav aria-label="Maintenance topics" className="mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-5">
              <Link aria-current={schedule ? "page" : undefined} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${schedule ? "bg-white text-black" : "border border-white/15 text-white/65 hover:border-white/35 hover:text-white"}`} href="/maintenance/schedule">
                Schedule
              </Link>
              {maintenanceTopics.map((topic) => {
                const active = topic.id === activeTopicId;

                return (
                  <Link aria-current={active ? "page" : undefined} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${active ? "bg-white text-black" : "border border-white/15 text-white/65 hover:border-white/35 hover:text-white"}`} href={topic.route} key={topic.id}>
                    {topic.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
