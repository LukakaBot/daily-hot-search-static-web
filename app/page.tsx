"use client";

import React, { useEffect, useState } from "react";
import { HotSearchDataItem } from "@/api/common/types";
import {
  fetchWeiboHotSearchList,
  fetchBilibiliHotSearchList,
} from "@/api/hotSearch";
import { useLoading } from "@/hook";
import BaseIcon from "@/components/Base/Icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

function getBadgeColorClassName(index: number) {
  if (index <= 0) {
    return "bg-red-600 text-white";
  } else if (index <= 1) {
    return "bg-red-500 text-white";
  } else if (index <= 2) {
    return "bg-red-400 text-white";
  }
}

function HotSearchDataList({
  list,
  loading,
}: {
  list: HotSearchDataItem[];
  loading: boolean;
}) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex">
                <BaseIcon className="mr-2" name="svg-xinlang" />
                微博
              </div>
            </CardTitle>
            <CardDescription>123</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-72 rounded-md">
              {loading ? (
                <div className="flex justify-center items-center h-72">
                  <span className="loading loading-infinity loading-xl"></span>
                </div>
              ) : (
                list.map((item, index) => {
                  return (
                    <div
                      className="w-full flex items-center not-last:mb-2 cursor-pointer"
                      key={item.id}
                    >
                      <Badge
                        className={getBadgeColorClassName(index)}
                        variant="secondary"
                      >
                        {item.id}
                      </Badge>
                      {/* <div>
                        <Button
                          // className='overflow-hidden whitespace-normal break-words'
                          className="whitespace-normal"
                          variant="link"
                          onClick={() => window.open(item.url, "_blank")}
                        >
                          {item.title}
                        </Button>
                      </div> */}
                      <span
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium underline-offset-4 hover:underline"
                        onClick={() => window.open(item.url, "_blank")}
                      >
                        {item.title}
                      </span>
                    </div>
                  );
                })
              )}
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function WeiboHotSearchList() {
  const [list, setList] = useState<HotSearchDataItem[]>([]);
  const [loading, setLoading] = useLoading();

  const getData = async () => {
    try {
      setLoading(true);
      const data = await fetchWeiboHotSearchList();
      setList(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <HotSearchDataList list={list} loading={loading} />;
}

function BilibiliHotSearchList() {
  const [list, setList] = useState<HotSearchDataItem[]>([]);
  const [loading, setLoading] = useLoading();

  const getData = async () => {
    try {
      setLoading(true);
      const data = await fetchBilibiliHotSearchList();
      setList(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <HotSearchDataList list={list} loading={loading} />;
}

function Home() {
  return (
    <>
      <WeiboHotSearchList />
      <BilibiliHotSearchList />
    </>
  );
}

export default Home;
