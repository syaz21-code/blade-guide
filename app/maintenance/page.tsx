import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Icon } from "@/components/ui/icon";
import { guideContent } from "@/lib/manual";

export default function MaintenancePage() {
  return (
    <div className="min-h-dvh bg-[#f6f6f4] text-slate-950">
      <SiteHeader currentPage="maintenance" />
      <main>
        <section className="border-b border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.72fr] lg:px-10 lg:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff826f]">Maintenance hub</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-7xl lg:leading-[0.96]">A maintenance index with standards.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Every topic is mapped now, so its final instructions, safety notes, materials, and source pages have a clear place to live once they are verified.</p>
            </div>
            <div className="self-end rounded-2xl border border-white/15 bg-white/[0.06] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Publishing rule</p>
              <p className="mt-3 text-lg font-medium leading-7 text-white">A task appears here only with its source reference. Until then, it stays clearly marked as in review.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="topic-index-title" className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d73b23]">Topic index</p>
              <h2 id="topic-index-title" className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">The work, organized before it is published.</h2>
            </div>
            <p className="text-sm text-slate-500">{guideContent.maintenanceTopics.length} planned maintenance topics</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {guideContent.maintenanceTopics.map((topic, index) => (
              <article className="group flex min-h-[210px] flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_42px_-32px_rgba(15,23,42,0.5)]" key={topic.id}>
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fff0ed] text-[#d73b23]">
                    <Icon className="h-5 w-5" name={topic.icon} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.12em] text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mt-auto pt-10 text-xl font-semibold tracking-[-0.035em] text-slate-950">{topic.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{topic.status}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div>
              <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">Looking for the reference layer first?</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">Return to the general-information sections while the maintenance content undergoes source review.</p>
            </div>
            <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#d73b23] hover:text-slate-950 sm:mt-0" href="/#general-information">
              View general information
              <Icon className="h-4 w-4" name="arrow-up-right" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
