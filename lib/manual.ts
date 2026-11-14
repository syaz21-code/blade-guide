import manualNavigation from "@/content/manual-navigation.json";

export type GuideIcon =
  | "book"
  | "brake"
  | "dashboard"
  | "droplet"
  | "shield"
  | "spark"
  | "steering"
  | "tyre"
  | "wrench";

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
  icon: GuideIcon;
};

export type GuideContent = {
  manual: {
    title: string;
    editionLabel: string;
    sourcePolicy: string;
  };
  navigation: Array<{
    label: string;
    items: NavigationItem[];
  }>;
  generalInformation: Array<{
    id: string;
    title: string;
    description: string;
    icon: GuideIcon;
    sourceReferences: string[];
  }>;
  maintenanceTopics: Array<{
    id: string;
    title: string;
    icon: GuideIcon;
    status: string;
    sourceReferences: string[];
  }>;
};

export const guideContent = manualNavigation as GuideContent;
