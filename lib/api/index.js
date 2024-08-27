import { request } from './request';

export function yamlPost(params) {
  return request("post", `/yaml`, { "header": { "accept": "application/json", "Content-Type": "application/json", }, })(params);
}

