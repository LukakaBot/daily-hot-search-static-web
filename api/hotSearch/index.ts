import type { HotSearchDataItem } from "@/api/common/types";
import fetcher from "@/utils/fetcher";

/** 获取微博热搜数据列表 */
export function fetchWeiboHotSearchList(): Promise<HotSearchDataItem[]> {
  return fetcher.get('/weibo');
}

/** 获取blibili热搜 */
export function fetchBilibiliHotSearchList(): Promise<HotSearchDataItem[]> {
  return fetcher.get('/bilibili');
}

/** 获取掘金热搜 */
export function fetchJujinHotSearchList(): Promise<HotSearchDataItem[]> {
  return fetcher.get('/juejin');
}