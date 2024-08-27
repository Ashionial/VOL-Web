type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type YamlPostParams0 = { "body"?: { "filename": string; "content": string; }; };
type YamlPostResult0 = RequestResult<null>;
/**
* Upload Yaml
*/
export function yamlPost(params: YamlPostParams0): YamlPostResult0;

