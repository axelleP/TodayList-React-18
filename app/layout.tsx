import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Today list",
  description: "Créer sa liste de tâches à réaliser pour la journée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <link rel="icon" type="image/x-icon" href="/favicon.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
