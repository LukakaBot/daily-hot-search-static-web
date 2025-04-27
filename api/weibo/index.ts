import type { HotSearchDataItem } from "@/api/common/types";
import fetcher from "@/utils/request";

/** 获取热搜数据列表 */
export function fetchHotSearchList(): Promise<HotSearchDataItem[]> {
  return fetcher.get('/');
}