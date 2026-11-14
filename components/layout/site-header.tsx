import Link from "next/link";

export type SitePage = "home" | "specifications" | "safety" | "fluids" | "maintenance";

type SiteHeaderProps = {
  currentPage?: SitePage;
};

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "specifications", label: "Specifications", href: "/general-information/specifications" },
  { id: "safety", label: "Safety", href: "/general-information/safety" },
  { id: "fluids", label: "Fuel & oil", href: "/general-information/fluids" },
  { id: "maintenance", label: "Maintenance", href: "/maintenance" },
] as const;

export function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#050505]/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link aria-label="Blade 250 home" className="flex shrink-0 items-center gap-2.5" href="/">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#e13e25] text-[11px] font-black tracking-[-0.08em] text-white shadow-[0_6px_18px_rgba(225,62,37,0.22)]">B/</span>
          <span className="text-sm font-bold tracking-[0.1em] text-white">BLADE 250</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = item.id === currentPage;

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? "bg-white text-black" : "text-white/55 hover:bg-white/10 hover:text-white"
                }`}
                href={item.href}
                key={item.id}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-white/80 transition-colors hover:border-white/35 hover:text-white">Menu</summary>
            <nav aria-label="Mobile primary navigation" className="absolute right-0 top-[calc(100%+12px)] flex w-56 flex-col rounded-2xl border border-white/10 bg-[#111113] p-2 shadow-2xl">
              {navItems.map((item) => {
                const isActive = item.id === currentPage;

                return (
                  <Link className={`rounded-xl px-3 py-2.5 text-sm font-medium ${isActive ? "bg-white text-black" : "text-white/65 hover:bg-white/10 hover:text-white"}`} href={item.href} key={item.id}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
