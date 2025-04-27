export interface ResponseData<D> {
  code: number;
  message: string;
  data: D;
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