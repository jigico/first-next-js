import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <nav>
      <Link href="/">HOME</Link>
      <Link href="/ssgRendering">SSG</Link>
      <Link href="/isrRendering">ISR</Link>
      <Link href="/csrRendering">CSR</Link>
      <Link href="/ssgRendering">SSR</Link>
    </nav>
  );
};
