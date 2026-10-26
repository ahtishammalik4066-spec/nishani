import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishaani — A little piece of your forever",
  description:
    "Personalized 3D keepsakes, made from the photographs and moments you never want to forget.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="site-body">{children}</body>
    </html>
  );
}
