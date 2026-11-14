import Link from "next/link";

import { maintenanceTopics } from "@/content/maintenance/topics";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--surface)] text-[var(--text-secondary)]">
      <div className="mx-auto max-w-[var(--content-width)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link className="text-xl font-semibold tracking-tight text-[var(--foreground)]" href="/">Blade 250</Link>
            <p className="mt-4 max-w-xs text-sm leading-6">A local-first service guide, with technical information referenced to the supplied HYOSUNG service manual.</p>
          </div>
          <nav aria-label="General information footer links" className="flex flex-col items-start gap-3 text-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--foreground)]">General information</p>
            <Link className="hover:text-white" href="/general-information/specifications">Specifications</Link>
            <Link className="hover:text-white" href="/general-information/safety">Safety precautions</Link>
            <Link className="hover:text-white" href="/general-information/fluids">Fuel &amp; oil</Link>
          </nav>
          <nav aria-label="Maintenance footer links" className="flex flex-col items-start gap-3 text-sm"> <br />
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--foreground)]">Maintenance</p>
            <Link className="hover:text-white" href="/maintenance/schedule">Service schedule</Link>
            {maintenanceTopics.map((topic) => <Link className="hover:text-white" href={topic.route} key={topic.id}>{topic.title}</Link>)}
          </nav>
        </div>
        <p className="mt-12 border-t border-white/10 pt-5 text-xs leading-5 text-[var(--text-muted)]">Technical content refers to the HYOSUNG Service Manual. Refer to the original manual when servicing.</p>
      </div>
    </footer>
  );
}
