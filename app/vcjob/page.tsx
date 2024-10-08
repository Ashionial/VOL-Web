'use client';

import { ExecPostRequest, ExecPost200Response } from '@/lib/api';
import useSWR, { Fetcher } from 'swr'
import { api } from '@/lib/utils';

export default function Page() {
    const fetcher: Fetcher<ExecPost200Response> = (param: ExecPostRequest) => api.execPost(param);
    const param: ExecPostRequest = {
        cmd: 'kubectl get vcjob -o json',
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
    console.log(json);

    return <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>{json.items.map((item: any, index: number) => (
        <div className="vcjob" key={index}>
            <div className="">{item.apiVersion}</div>
            <div>{item.metadata.name}</div>
            <div>{item.metadata.namespace}</div>
            <div>{item.status.state.lastTransitionTime}</div>
        </div >
    ))}</div>;
}