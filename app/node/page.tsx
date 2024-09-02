'use client';

import { ExecPostRequest, ExecPost200Response } from '@/lib/api';
import useSWR, { Fetcher } from 'swr'
import { api } from '@/lib/utils';

export default function Page() {
    const fetcher: Fetcher<ExecPost200Response> = (param: ExecPostRequest) => api.execPost(param);
    const param: ExecPostRequest = {
        cmd: 'kubectl get no -o json',
    };
    const { data, error, isLoading } = useSWR(param, fetcher);
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    const output = data?.output;
    if (!output) {
        return <div>No data available</div>;
    }
    const decoded = atob(output);
    const json = JSON.parse(decoded);
    // json path
    for (const item of json.items) {
        console.log(item.metadata.labels);
    }

    return <div className='flex flex-wrap'>{json.items.map((item: any, index: number) => (
        <div className="node" key={index}>
            <div>{item.metadata.name}</div>
            <div>{item.status.addresses.map((address: any) => address.address).join(', ')}</div>
            <div>{item.status.conditions.map((condition: any) => condition.type).join(', ')}</div>
            <div>{item.status.nodeInfo.osImage}</div>
            <div>{item.status.nodeInfo.kernelVersion}</div>
            <div>{item.status.nodeInfo.kubeletVersion}</div>
            <div>{item.status.nodeInfo.containerRuntimeVersion}</div>
        </div >
    ))}</div>;
}