import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Care Services Application",
  description: "Next.js Application PWA's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Topbar /> */}
        <main className="flex flex-row">
          <section>{children}</section>
        </main>
        {/* <Bottombar /> */}
      </body>
    </html>
  );
}
