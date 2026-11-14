import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blade 250 Service Guide",
  description: "A local-first digital workspace for verified Blade 250 service information.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
