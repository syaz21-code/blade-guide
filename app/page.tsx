import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecificationsStory } from "@/components/three/specifications-story";

const sections = [
  { number: "01", title: "Specifications", description: "Get to know the motorcycle, from its engine to its dimensions.", href: "/general-information/specifications" },
  { number: "02", title: "Safety", description: "Start with the precautions that make every service safer.", href: "/general-information/safety" },
  { number: "03", title: "Fuel & oil", description: "Find the manual’s recommendations for fluids and fuel.", href: "/general-information/fluids" },
  { number: "04", title: "Maintenance", description: "Explore service intervals and maintenance topics.", href: "/maintenance" },
];

export default function Home() {
  return (
    <div id="top" className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main>
        <SpecificationsStory />
        <section id="general-information" aria-labelledby="guide-sections-title" className="scroll-mt-24 bg-[var(--surface)] px-6 py-24 sm:px-10 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold text-[#9fa9b8]">The service guide</p>
            <h2 id="guide-sections-title" className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">Everything you need to know. All in one place.</h2>
            <div className="mt-12 grid gap-x-10 md:grid-cols-2">
              {sections.map((section) => (
                <Link className="group flex min-h-40 items-start justify-between gap-5 border-t border-white/15 py-7 transition-colors hover:border-white/50 active:opacity-70" href={section.href} key={section.title}>
                  <div>
                    <span className="text-xs font-medium tracking-[0.12em] text-white/45">{section.number}</span>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">{section.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">{section.description}</p>
                  </div>
                  <span aria-hidden="true" className="mt-8 text-xl text-white/55 transition-transform group-hover:translate-x-1 group-hover:text-white">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
