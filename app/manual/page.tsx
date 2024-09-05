"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExecPost200Response, ExecPostRequest, K8sLogGet200Response, K8sLogGetRequest, ManualPost200Response } from "@/lib/api";
import { api } from "@/lib/utils";
import { useRef, useState } from "react";
import useSWR, { Fetcher } from "swr";


export default function Page() {
  const [cmd, setCmd] = useState("");
  const [imageName, setImageName] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);
  const [hide, setHide] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid w-full max-w-sm items-center gap-2">
        <div>file</div>
        <Input type="file" className="rounded-xl border-2 border-gray-400 my-input" ref={fileInput} />
        <div>cmd</div>
        <Input type="text" className="rounded-xl border-2 border-gray-400 my-input" value={cmd} onChange={(e) => setCmd(e.target.value)} />
        <div>imageName</div>
        <Input type="text" className="rounded-xl border-2 border-gray-400 my-input" value={imageName} onChange={(e) => setImageName(e.target.value)} />
        <Button className="mt-5 rounded-2xl hover:text-blue-500 my-button" onClick={
          (e) => {
            e.preventDefault();
            setHide(true);
          }
        }>Submit</Button>
      </div>
      <div className="mt-4">
        {hide ? <FetchAndRender fileInput={fileInput} cmd={cmd} imageName={imageName} /> : <></>}
      </div>
    </div>
  );
}


function FetchAndRender(props: { fileInput: React.RefObject<HTMLInputElement>, cmd: string, imageName: string }) {
  const fetcher: Fetcher<ManualPost200Response> = (cmd: string) => api.manualPost({ file: props.fileInput.current?.files?.[0] || new Blob(), cmd: cmd, imageName: props.imageName });
  const { data, error, isLoading } = useSWR(props.cmd, fetcher);
  console.log(data);
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4">
        {data ? <div className="w-full whitespace-pre-wrap">log: {data.buildOutput}</div> : null}
      </div >
    </>
  );
}