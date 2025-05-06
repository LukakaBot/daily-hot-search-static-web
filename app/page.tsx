'use client';

import React, { useEffect, useState } from 'react';
import { HotSearchDataItem } from '@/api/common/types';
import {
	fetchWeiboHotSearchList,
	fetchBilibiliHotSearchList,
	fetchJujinHotSearchList,
} from '@/api/hotSearch';
import { useLoading } from '@/hook';
import BaseIcon from '@/components/Base/Icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

function getBadgeColorClassName(index: number) {
	if (index <= 0) {
		return 'bg-red-600 text-white';
	} else if (index <= 1) {
		return 'bg-red-500 text-white';
	} else if (index <= 2) {
		return 'bg-red-400 text-white';
	}
}

function HotSearchDataList({
	list,
	loading,
	children,
}: {
	list: HotSearchDataItem[];
	loading: boolean;
	children?: React.ReactNode | undefined;
}) {
	return (
		<div className='w-full'>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				<Card>
					<CardHeader>
						<CardTitle>
							<div className='flex'>{children}</div>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ScrollArea className='h-72 rounded-md'>
							{loading ? (
								<div className='flex justify-center items-center h-72'>
									<span className='loading loading-infinity loading-xl'></span>
								</div>
							) : (
								list.map((item, index) => {
									return (
										<div
											className='w-full flex items-center not-last:mb-2 cursor-pointer'
											key={item.id}
										>
											<Badge
												className={getBadgeColorClassName(index)}
												variant='secondary'
											>
												{item.id}
											</Badge>
											<span
												className='inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium underline-offset-4 hover:underline'
												onClick={() => window.open(item.url, '_blank')}
											>
												{item.title}
											</span>
										</div>
									);
								})
							)}
							<ScrollBar orientation='horizontal' />
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

	return (
		<HotSearchDataList list={list} loading={loading}>
			{/* <BaseIcon className='mr-2' name='svg-xinlang' /> */}
			<BaseIcon className='mr-2' name='icon-[ant-design--weibo-outlined]' />
			微博
		</HotSearchDataList>
	);
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

	return (
		<HotSearchDataList list={list} loading={loading}>
			<BaseIcon className='mr-2' name='icon-[ant-design--bilibili-filled]' />
			bilibili
		</HotSearchDataList>
	);
}

function JuejinHotSearchList() {
	const [list, setList] = useState<HotSearchDataItem[]>([]);
	const [loading, setLoading] = useLoading();

	const getData = async () => {
		try {
			setLoading(true);
			const data = await fetchJujinHotSearchList();
			setList(data);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<HotSearchDataList list={list} loading={loading}>
			<BaseIcon className='mr-2' name='icon-[tabler--brand-juejin]' />
			掘金
		</HotSearchDataList>
	);
}

function Home() {
	return (
		<div className='flex gap-2'>
			<WeiboHotSearchList />
			<BilibiliHotSearchList />
			<JuejinHotSearchList />
		</div>
	);
}

export default Home;
