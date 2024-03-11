"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header>
      <nav className="p-5 flex items-center justify-center gap-1.5 border-b">
        <Link href="/" className={`link ${pathname === "/" ? "text-rose-600 font-bold" : ""}`}>
          NEXT JS 공부
        </Link>
        <Link href="/ssgRendering" className={`link ${pathname === "/ssgRendering" ? "text-rose-600 font-bold" : ""}`}>
          SSG
        </Link>
        <Link href="/isrRendering" className={`link ${pathname === "/isrRendering" ? "text-rose-600 font-bold" : ""}`}>
          ISR
        </Link>
        <Link href="/csrRendering" className={`link ${pathname === "/csrRendering" ? "text-rose-600 font-bold" : ""}`}>
          CSR
        </Link>
        <Link href="/ssrRendering" className={`link ${pathname === "/ssrRendering" ? "text-rose-600 font-bold" : ""}`}>
          SSR
        </Link>
      </nav>
    </header>
  );
};
