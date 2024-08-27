"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { yamlPost, YamlPostParams0 } from "@/lib/api";

export default function Upload() {
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input id="yaml" type="file" ref={fileInput} />
      <Button
        onClick={() => {
          const file = fileInput.current?.files?.[0];
          if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
              console.log(reader.result);

              const param: YamlPostParams0 = {
                body: {
                  filename: file.name,
                  content: reader.result?.toString() || "",
                },
              };
              const r = yamlPost(param);
            };
            reader.onerror = function (error) {
              console.log("Error: ", error);
            };
          }
        }}
      >
        Log file content
      </Button>
    </div>
  );
}
