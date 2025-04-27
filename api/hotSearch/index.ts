import type { HotSearchDataItem } from "@/api/common/types";
import fetcher from "@/utils/fetcher";

/** 获取微博热搜数据列表 */
export function fetchWeiboHotSearchList(): Promise<HotSearchDataItem[]> {
  return fetcher.get('/weibo/hotSearch');
}