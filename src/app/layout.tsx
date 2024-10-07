import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "리그 오브 레전드 도감",
  description: "리그 오브 레전드 정보",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased, bg-[#18181b] text-white py-[100px]`}
      >
        <nav className="fixed top-0 w-full h-14 border-b border-b-[rgba(255,255,255,0.5)]">
          <ul className="flex flex-row justify-between p-4">
            <li>
              <Link href="/">홈</Link>
            </li>
            <li>
              <Link href="/champions">챔피언</Link>
            </li>
            <li>
              <Link href="/items">아이템</Link>
            </li>
            <li>
              <Link href="/rotation">챔피언 로테이션</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
