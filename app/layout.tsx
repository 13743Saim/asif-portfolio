import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asif Ikbal — AI Product & Automation",
  description:
    "Portfolio of Asif Ikbal — AI workflow automation, product development, technical delivery, and intelligent systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
