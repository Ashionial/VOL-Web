"use client";

import { Input } from "@/components/ui/input";
import { useRef } from "react";

export default function Command() {
  var namespace = useRef<HTMLInputElement>(null);
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input type="text" placeholder="Namespace" ref={namespace} />
    </div>
  );
}
