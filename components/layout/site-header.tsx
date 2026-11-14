import Link from "next/link";

type SiteHeaderProps = {
  currentPage?: "home" | "maintenance";
};

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "guide", label: "General information", href: "/#general-information" },
  { id: "maintenance", label: "Maintenance", href: "/maintenance" },
] as const;

export function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-[#f6f6f4]/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link aria-label="Blade 250 home" className="flex shrink-0 items-center gap-2.5" href="/">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#e13e25] text-[11px] font-black tracking-[-0.08em] text-white shadow-[0_6px_18px_rgba(225,62,37,0.22)]">B/</span>
          <span className="text-sm font-bold tracking-[0.1em] text-slate-950">BLADE 250</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = item.id === currentPage;

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-white hover:text-slate-950"
                }`}
                href={item.href}
                key={item.id}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="rounded-full bg-[#e13e25] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#c9321c] sm:text-sm" href="/maintenance">
          <span className="hidden sm:inline">Open </span>Maintenance
        </Link>
      </div>
    </header>
  );
}
