"use client";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Nav from "./Nav";
import { RecoilRoot } from "recoil";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <Nav></Nav>
          <main className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
            {children}
          </main>
        </RecoilRoot>
      </body>
    </html>
  );
}