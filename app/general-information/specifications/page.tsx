import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecificationsStory } from "@/components/three/specifications-story";

export default function SpecificationsPage() {
  return (
    <div className="min-h-dvh bg-[var(--background)] text-[#f5f5f5]">
      <SiteHeader currentPage="specifications" />
      <main>
        <SpecificationsStory />
      </main>
      <SiteFooter />
    </div>
  );
}
