'use client';

import { ExecPostRequest, ExecPost200Response } from '@/lib/api';
import useSWR, { Fetcher } from 'swr'
import { api } from '@/lib/utils';

export default function Page() {
    const fetcher: Fetcher<ExecPost200Response> = (param: ExecPostRequest) => api.execPost(param);
    const param: ExecPostRequest = {
        cmd: 'kubectl get po -o json',
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
        <div className="p-4 border border-gray-300 rounded-md m-4" key={index}>
            <div>{item.metadata.name}</div>
            <div>{item.metadata.namespace}</div>
            <div>{item.status.phase}</div>
            <div>{item.status.podIP}</div>
            <div>{item.status.containerStatuses.map((container: any) => container.name).join(', ')}</div>
        </div >
    ))}</div>;
}