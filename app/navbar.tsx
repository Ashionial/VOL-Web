"use client";

import "./globals.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center h-screen gap-4">
      <Link className="w-full flex justify-center items-center p-4 rounded-lg bg-gray-900" href="/">Home</Link>
      <Link className="w-full flex justify-center items-center p-4 rounded-lg bg-gray-900" href="/node">Node</Link>
      <Link className="w-full flex justify-center items-center p-4 rounded-lg bg-gray-900" href="/pod">Pod</Link>
      <Link className="w-full flex justify-center items-center p-4 rounded-lg bg-gray-900" href="/vcjob">Vcjob</Link>
      <Link href="/command">Command</Link>
      <Link href="/docker">Docker</Link>
      <Link href="/log">Log</Link>
      <Link href="/manual">Manual</Link>
    </div>
  );
}
