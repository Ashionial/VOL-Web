"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExecPost200Response, ExecPostRequest, K8sLogGet200Response, K8sLogGetRequest } from "@/lib/api";
import { api } from "@/lib/utils";
import { useRef, useState } from "react";
import useSWR, { Fetcher } from "swr";


export default function Page() {
  const [podName, setPodName] = useState("svclb-traefik-1e958ce9-bx82x");
  const [namespace, setNamespace] = useState("kube-system");
  const [hide, setHide] = useState(false);
  const handleSubmit = () => {
    console.log(podName);
    setHide(true);
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid w-full max-w-sm items-center gap-2">
        <Input type="text" className="rounded-xl border-2 border-gray-400 my-input" value={podName} onChange={(e) => setPodName(e.target.value)} />
        <Input type="text" className="rounded-xl border-2 border-gray-400 my-input" value={namespace} onChange={(e) => setNamespace(e.target.value)} />
        <Button className="mt-5 rounded-2xl hover:text-blue-500 my-button" onClick={handleSubmit}>Submit</Button>
      </div>
      <div className="mt-4">
        {hide ? <FetchAndRender podName={podName} namespace={namespace} /> : <></>}
      </div>
    </div >
  );
}

function FetchAndRender(
  props: { podName: string, namespace: string }
) {
  const fetcher: Fetcher<K8sLogGet200Response> = (podName: string) => api.k8sLogGet({ podName: podName, namespace: props.namespace });
  const { data, error, isLoading } = useSWR(props.podName, fetcher);
  console.log(data);
  const decoded = atob(data?.output || "");
  return (
    <>
      <div className="border border-gray-300 rounded-md p-4">
        {data ? <div className="w-full h-96 whitespace-pre-wrap overflow-auto my-scroll">log: {decoded}</div> : null}
      </div >
    </>
  );
}