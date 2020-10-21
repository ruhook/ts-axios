type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DETELE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

interface AxiosRequestConfigOptional {
  method: Method
  data: any
  params: any
  headers: any
  responseType: XMLHttpRequestResponseType
  timeout: number
}
export interface AxiosRequestConfig extends Partial<AxiosRequestConfigOptional> {
  url: string
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
