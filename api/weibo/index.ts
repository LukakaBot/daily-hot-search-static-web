import request from "@/utils/request";

/** 获取热搜数据列表 */
export function fetchHotSearchList() {
  return request.get('https://api.lukaka.work');
}