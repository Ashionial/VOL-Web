'use client';

import { YamlPostRequest, YamlPostRequestFromJSON, DefaultApi, YamlPostOperationRequest, Configuration } from '@/lib/api';
import useSWR, { Fetcher } from 'swr'
import { api } from '@/lib/utils';

export default function Page() {
    const fetcher: Fetcher<YamlPostOperationRequest> = (param: YamlPostOperationRequest) => api.yamlPost(param);
    const param: YamlPostOperationRequest = {
        yamlPostRequest: {
            filename: 'test.yaml',
            content: 'test',
        },
    };

    const { data, error, isLoading } = useSWR(param, fetcher);
    return <div>Node</div>;
}