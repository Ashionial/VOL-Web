"use client";

import "./globals.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center h-screen gap-4">
      <Link className="navbar" href="/">Home</Link>
      <Link className="navbar" href="/node">Node</Link>
      <Link className="navbar" href="/pod">Pod</Link>
      <Link className="navbar" href="/vcjob">Vcjob</Link>
      <Link className="navbar" href="/command">Command</Link>
      <Link className="navbar" href="/docker">Docker</Link>
      <Link className="navbar" href="/log">Log</Link>
      <Link className="navbar" href="/manual">Manual</Link>
    </div>
  );
}
