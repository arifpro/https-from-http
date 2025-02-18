declare module "https-from-http" {
  interface RequestConfig {
    headers?: Record<string, string>;
    data?: any;
  }

  interface ResponseData {
    status: number;
    headers: Record<string, string>;
    data: any;
  }

  function get(url: string, config?: RequestConfig): Promise<ResponseData>;
  function post(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ResponseData>;
  function put(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ResponseData>;
  function patch(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ResponseData>;
  function remove(url: string, config?: RequestConfig): Promise<ResponseData>;
  function head(url: string, config?: RequestConfig): Promise<ResponseData>;
  function options(url: string, config?: RequestConfig): Promise<ResponseData>;
  function request(config: {
    method: string;
    url: string;
    data?: any;
    headers?: Record<string, string>;
  }): Promise<ResponseData>;

  const callapi: {
    get: typeof get;
    post: typeof post;
    put: typeof put;
    patch: typeof patch;
    remove: typeof remove;
    head: typeof head;
    options: typeof options;
    request: typeof request;
  };

  export default callapi;
}
