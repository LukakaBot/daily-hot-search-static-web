export interface ResponseData<T> {
  code: number;
  message: string;
  data: T;
}

export interface HotSearchDataItem {
  id: number;
  title: string;
  desc: string;
  author: string;
  timestamp: number;
  hots: number;
  url: string;
}