import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <Link className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-950" href="/">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#e13e25] text-[10px] font-black tracking-[-0.08em] text-white">B/</span>
          BLADE 250
        </Link>
        <p className="text-xs leading-5 text-slate-500">Local-first service reference · Technical content is added only after source verification.</p>
      </div>
    </footer>
  );
}
