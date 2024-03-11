import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <header>
      <nav className="p-4 flex items-center justify-center gap-1.5 border-b">
        <Link href="/">NEXT JS 공부</Link>
        <Link href="/ssgRendering">SSG</Link>
        <Link href="/isrRendering">ISR</Link>
        <Link href="/csrRendering">CSR</Link>
        <Link href="/ssrRendering">SSR</Link>
      </nav>
    </header>
  );
};
