import request from "@/utils/request";
import type { HotSearchDataItem } from "@/api/common/types";

/** 获取热搜数据列表 */
export function fetchHotSearchList() {
  return request.get<HotSearchDataItem[]>('https://api.lukaka.work');
}