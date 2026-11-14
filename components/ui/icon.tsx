import type { GuideIcon } from "@/lib/manual";
import type { ReactNode } from "react";

type IconName = GuideIcon | "alert" | "arrow-up-right" | "chevron-right" | "info" | "menu" | "search" | "x";

type IconProps = {
  name: IconName;
  className?: string;
  title?: string;
};

const iconPaths: Record<IconName, ReactNode> = {
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M4 19a2.5 2.5 0 0 1 2.5-2.5H20" />
    </>
  ),
  wrench: (
    <path d="M21 6.8a5.2 5.2 0 0 1-6.9 4.9L7.4 18.4a2.5 2.5 0 1 1-3.5-3.5l6.7-6.7A5.2 5.2 0 0 1 17.2 3l-3.1 3.1 2.8 2.8L21 6.8Z" />
  ),
  shield: (
    <path d="M12 3 20 6.5v5.2c0 4.5-3 7.7-8 9.3-5-1.6-8-4.8-8-9.3V6.5L12 3Z" />
  ),
  droplet: <path d="M12 3.5C9.1 7.4 6 10.4 6 14a6 6 0 0 0 12 0c0-3.6-3.1-6.6-6-10.5Z" />,
  brake: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M17.4 6.8 21 7v4.5h-2.8" />
    </>
  ),
  tyre: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="m8 5 1.4 3M16 5l-1.4 3M5 9l3 .8M19 9l-3 .8M5 15l3-.8M19 15l-3-.8M8 19l1.4-3M16 19l-1.4-3" />
    </>
  ),
  steering: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M12 10.5V4.5M10.6 12.8 5.3 16M13.4 12.8l5.3 3.2" />
    </>
  ),
  spark: <path d="m14.8 2.5-6.6 9.1h4.1L9.2 21.5l6.6-9.1h-4.1l3.1-9.9Z" />,
  alert: (
    <>
      <path d="M12 3.5 21 20.2H3L12 3.5Z" />
      <path d="M12 9v4.5M12 17h.01" />
    </>
  ),
  "arrow-up-right": <path d="M5 19 19 5M8 5h11v11" />,
  "chevron-right": <path d="m9 18 6-6-6-6" />,
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 10.5V16M12 7.5h.01" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="5.8" />
      <path d="m16 16 4 4" />
    </>
  ),
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

export function Icon({ name, className, title }: IconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {iconPaths[name]}
    </svg>
  );
}
