import Link from "next/link";

export type SitePage = "home" | "specifications" | "safety" | "fluids" | "maintenance";

type SiteHeaderProps = {
  currentPage?: SitePage;
};

const navItems = [
  { id: "specifications", label: "Specifications", href: "/general-information/specifications" },
  { id: "safety", label: "Safety", href: "/general-information/safety" },
  { id: "fluids", label: "Fuel & oil", href: "/general-information/fluids" },
  { id: "maintenance", label: "Maintenance", href: "/maintenance" },
] as const;

export function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  return (
    <header className="site-glass sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-24 w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:h-28 sm:px-8 lg:px-10">
        <Link aria-label="Blade 250 home" className="flex shrink-0 items-center gap-2.5" href="/">
          <span className="text-xl font-semibold tracking-[-0.02em] text-white">Blade 250</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = item.id === currentPage;

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-5 py-3 text-base font-medium transition-colors active:scale-95 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
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
            <summary className="cursor-pointer list-none rounded-full px-5 py-3 text-base font-semibold text-white/85 transition-colors hover:bg-white/10 active:bg-white/20">Menu <span aria-hidden="true">⌄</span></summary>
            <nav aria-label="Mobile primary navigation" className="site-glass absolute right-0 top-[calc(100%+8px)] flex w-56 origin-top-right flex-col rounded-2xl border border-white/10 bg-[#161b24]/95 p-2 shadow-2xl backdrop-blur-xl">
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
