import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Des films et des tests",
  description:
    "Un projet pour faire différents types de tests, unitaires, e2e etc.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr">
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
