"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DockerPostRequest, K8sYamlPostRequest, YamlPostOperationRequest } from "@/lib/api";
import { api } from "@/lib/utils";
import { useRef, useState } from "react";
import Editor from "@/components/editor";

export default function Upload() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [code, setCode] = useState("");
  return (
    <div className="w-full items-center gap-1.5">
      <div className="h-full">
        <Editor onChange={setCode} value={code} />
      </div>
      <Button
        className="mt-4 mr-10 float-right max-w-min rounded-2xl bg-blue-500 hover:text-blue-500 my-blue-button "
        onClick={() => {
          console.log(code);
          // with file name

          const req: K8sYamlPostRequest = {
            file: new Blob([code], { type: 'text/yaml' }),
          };
          api.k8sYamlPost(req).then((res) => {
            console.log(res);
          }).catch((err) => {
            // readable stream
            // TypeError: err.response.body.on is not a function
            alert("error");
          });
        }}
      >
        Submit
      </Button>
    </div>
  );
}
