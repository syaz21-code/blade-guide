import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Icon } from "@/components/ui/icon";
import { maintenanceTopics } from "@/content/maintenance/topics";

const topicIcons = {
  "engine-oil": "droplet",
  brakes: "brake",
  tyres: "tyre",
  steering: "steering",
  lubrication: "wrench",
  "valve-clearance": "wrench",
  "spark-plug": "spark",
} as const;

export default function MaintenancePage() {
  return (
    <div className="min-h-dvh bg-[#050505] text-[#f5f5f7]">
      <SiteHeader currentPage="maintenance" />
      <main>
        <section className="border-b border-white/10 bg-[#090909] text-white">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.72fr] lg:px-10 lg:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff826f]">Maintenance hub</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-7xl lg:leading-[0.96]">Service, traced to the manual.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">Each routine is organized around its interval, precautions, technical data, source pages, and original procedure - without generic substitutions.</p>
            </div>
            <div className="self-end rounded-2xl border border-white/15 bg-white/[0.06] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">Start with the schedule</p>
              <p className="mt-3 text-lg font-medium leading-7 text-white">See the 1,000 km, 4,000 km, 8,000 km, and time-based work before opening a service topic.</p>
              <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff8c7a] hover:text-white" href="/maintenance/schedule">
                View maintenance schedule
                <Icon className="h-4 w-4" name="arrow-up-right" />
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="topic-index-title" className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff725c]">Topic index</p>
              <h2 id="topic-index-title" className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">Seven systems, one source standard.</h2>
            </div>
            <p className="text-sm text-white/45">{maintenanceTopics.length} source-linked maintenance topics</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {maintenanceTopics.map((topic) => (
              <Link className="group flex min-h-[230px] flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]" href={topic.route} key={topic.id}>
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e13e25]/15 text-[#ff8c7a]">
                    <Icon className="h-5 w-5" name={topicIcons[topic.id]} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.12em] text-white/35">{topic.indexLabel}</span>
                </div>
                <h3 className="mt-auto pt-10 text-xl font-semibold tracking-[-0.035em] text-white">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/48">{topic.interval.label}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
