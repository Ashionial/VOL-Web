"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { YamlPostOperationRequest } from "@/lib/api";
import { api } from "@/lib/utils";
import { useRef } from "react";

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

              const param: YamlPostOperationRequest = {
                yamlPostRequest: {
                  filename: file.name,
                  content: reader.result?.toString() || "",
                },
              };
              const r = api.yamlPost(param);
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
