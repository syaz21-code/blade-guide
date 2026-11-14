import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader, type SitePage } from "@/components/layout/site-header";

type ModulePageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  currentPage: Extract<SitePage, "specifications" | "safety" | "fluids">;
  children: ReactNode;
};

const moduleNavigation = [
  { id: "specifications", label: "Specifications", href: "/general-information/specifications" },
  { id: "safety", label: "Safety precautions", href: "/general-information/safety" },
  { id: "fluids", label: "Fuel & oil", href: "/general-information/fluids" },
] as const;

export function ModulePageShell({ eyebrow, title, intro, currentPage, children }: ModulePageShellProps) {
  return (
    <div className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader currentPage={currentPage} />
      <main>
        <section className="border-b border-white/10">
          <div className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-9 sm:px-8 sm:pb-16 sm:pt-12 lg:px-10 lg:pb-20">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-white/45">
              <Link className="transition-colors hover:text-white" href="/">Home</Link>
              <span aria-hidden="true" className="text-white/20">/</span>
              <Link className="transition-colors hover:text-white" href="/#general-information">General information</Link>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span className="text-white/70">{title}</span>
            </nav>

            <div className="mt-14 max-w-4xl sm:mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{eyebrow}</p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl lg:leading-[0.94]">{title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">{intro}</p>
            </div>

            <nav aria-label="General information sections" className="mt-12 flex w-full flex-wrap gap-2 border-t border-white/10 pt-5">
              {moduleNavigation.map((item) => {
                const active = item.id === currentPage;

                return (
                  <Link
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${active ? "bg-white text-black" : "border border-white/15 text-white/65 hover:border-white/35 hover:text-white"}`}
                    href={item.href}
                    key={item.id}
                  >
                    {item.label}
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
