"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Link href="/">Home</Link>
      <Link href="/node">Node</Link>
      <Link href="/command">Command</Link>
      <Link href="/upload">upload</Link>
    </div>
  );
}
