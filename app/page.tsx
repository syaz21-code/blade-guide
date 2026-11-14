import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Icon } from "@/components/ui/icon";
import { guideContent } from "@/lib/manual";

const generalInformationRoutes: Record<string, string> = {
  "motorcycle-overview": "/general-information/specifications",
  "safety-precautions": "/general-information/safety",
  "fuel-and-oil": "/general-information/fluids",
};

export default function Home() {
  return (
    <div id="top" className="min-h-dvh bg-[#050505] text-[#f5f5f7]">
      <SiteHeader />
      <main>
        <section aria-labelledby="guide-title" className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-7 sm:px-8 sm:pb-20 sm:pt-10 lg:px-10 lg:pb-28">
          <div className="grid overflow-hidden rounded-[30px] bg-slate-950 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative z-10 flex min-h-[490px] flex-col justify-between overflow-hidden px-6 py-7 text-white sm:px-10 sm:py-10 lg:min-h-[600px] lg:px-12 lg:py-12">
              <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px]" />
              <div className="relative flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                <span className="h-2 w-2 rounded-full bg-[#e13e25]" />
                Digital service guide
              </div>

              <div className="relative max-w-xl py-8">
                <p className="text-sm font-medium text-slate-300">{guideContent.manual.editionLabel}</p>
                <h1 id="guide-title" className="mt-5 text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl lg:leading-[0.96]">
                  Service clarity, engineered in.
                </h1>
                <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">A focused, local-first reference space for the Blade 250—built around source verification instead of generic advice.</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link className="inline-flex items-center gap-2 rounded-full bg-[#e13e25] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c9321c]" href="#general-information">
                    Explore general information
                    <Icon className="h-4 w-4" name="chevron-right" />
                  </Link>
                  <Link className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" href="/maintenance">
                    Maintenance hub
                    <Icon className="h-4 w-4" name="arrow-up-right" />
                  </Link>
                </div>
              </div>

              <div className="relative flex items-center gap-3 text-xs text-slate-400">
                <span className="h-px w-10 bg-[#e13e25]" />
                Scroll to begin
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-[#e13e25] p-6 sm:p-10 lg:min-h-[600px]">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.34)_1px,transparent_1px)] [background-size:52px_52px]" />
              <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">Reference system / 01</p>
              <p className="absolute -bottom-10 -right-3 text-[13rem] font-bold leading-none tracking-[-0.13em] text-white/20 sm:text-[17rem]">250</p>
              <div className="absolute left-[12%] top-[30%] h-44 w-44 rounded-full border border-white/40 sm:h-56 sm:w-56" />
              <div className="absolute left-[20%] top-[38%] h-28 w-28 rounded-full border border-white/30 sm:h-36 sm:w-36" />
              <div className="absolute left-[49%] top-[51%] h-px w-[45%] bg-white/60" />
              <div className="absolute left-[47%] top-[48%] h-2.5 w-2.5 rounded-full bg-slate-950 ring-4 ring-white/30" />
              <div className="absolute bottom-7 left-6 right-6 border-t border-white/40 pt-4 sm:bottom-10 sm:left-10 sm:right-10">
                <div className="flex items-end justify-between gap-5 text-white">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70">Designed around</p>
                    <p className="mt-1 text-lg font-semibold tracking-tight">Verified references</p>
                  </div>
                  <div className="text-right text-xs text-white/80">LOCAL<br />FIRST</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="general-information" aria-labelledby="general-information-title" className="scroll-mt-24 border-y border-white/10 bg-[#090909] py-16 sm:py-20 lg:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d73b23]">General information</p>
                <h2 id="general-information-title" className="mt-4 max-w-md text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">Know the system before the service.</h2>
              </div>
              <div className="max-w-xl lg:pt-1">
                <p className="text-lg leading-8 text-white/60">The guide begins with the information that gives every future task context. Each section is structured to keep its original source page alongside its final content.</p>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                  <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e13e25]" /> Source title</span>
                  <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e13e25]" /> Page reference</span>
                  <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e13e25]" /> Verification state</span>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {guideContent.generalInformation.map((item, index) => (
                <Link className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-white/25 hover:bg-white/[0.06] sm:p-7" href={generalInformationRoutes[item.id] ?? "/#general-information"} key={item.id}>
                  <article>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.14em] text-white/35">0{index + 1}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-[#e13e25] group-hover:text-white">
                      <Icon className="h-5 w-5" name={item.icon} />
                    </span>
                  </div>
                  <h3 className="mt-16 text-xl font-semibold tracking-[-0.035em] text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{item.description}</p>
                  <p className="mt-7 text-xs font-medium text-white/38">{item.sourceReferences[0]}</p>
                  </article>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-2xl text-sm leading-6 text-white/50">General Information is now source-linked. The same standard carries into maintenance as that content undergoes review.</p>
              <Link className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#e13e25] hover:text-white" href="/maintenance">
                Go to maintenance
                <Icon className="h-4 w-4" name="arrow-up-right" />
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="principle-title" className="bg-[#050505] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d73b23]">The guide principle</p>
              <h2 id="principle-title" className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">No substitutions, no guesswork - only source-linked information that earns a place in your routine.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/45">{guideContent.manual.sourcePolicy}</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
