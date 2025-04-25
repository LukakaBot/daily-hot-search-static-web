import type { FetcherRequestConfig, Method, ResponseData } from '../types';
import InterceptorManager from './InterceptorManager';

class Fetcher {
  private instanceConfig: FetcherRequestConfig;
  private interceptor = new InterceptorManager();
  create = (instanceConfig: FetcherRequestConfig) => new Fetcher(instanceConfig);

  constructor(instanceConfig: FetcherRequestConfig) {
    this.instanceConfig = instanceConfig;
  }

  async request<T = any, R = Response>(url: string, method: Method, data?: T): Promise<R> {
    const request = this.interceptor.request({
      url,
      method,
      data
    });

    const response = await fetch(url, request.options);
    return this.interceptor.response(response);
  }

  // get = <T = any>(url: string, data?: T): Promise<T> => this.request(url, 'GET', data);
  get = <T = any, R = ResponseData<T>, D = any>(url: string, data?: D): Promise<R> => this.request(url, 'GET', data);

  post = <T = any>(url: string, data?: T): Promise<T> => this.request(url, 'POST', data);

  put = <T = any>(url: string, data?: T): Promise<T> => this.request(url, 'PUT', data);

  delete = <T = any>(url: string, data?: T): Promise<T> => this.request(url, 'DELETE', data);

  patch = <T = any>(url: string, data?: T): Promise<T> => this.request(url, 'PATCH', data);
}

export default Fetcher;
