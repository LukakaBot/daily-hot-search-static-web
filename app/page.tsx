'use client';

import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import { fetchWeiboHotSearchList } from '@/api/hotSearch';
import { useEffect, useState } from 'react';
import { HotSearchDataItem } from '@/api/common/types';

function Home() {
	// console.log(process.env.NEXT_PUBLIC_SERVICE_URL);
	const [hotSearchData, setHotSearchData] = useState<HotSearchDataItem[]>([]);

	const getData = async () => {
		const res = await fetchWeiboHotSearchList();
		console.log(res);
		setHotSearchData(res);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<h1>我是首页</h1>
			<Button color='primary'>Button</Button>;
			{hotSearchData.map((item) => {
				return (
					<Card key={item.id}>
						<CardHeader>{item.title}</CardHeader>
						<CardBody>{item.desc}</CardBody>
					</Card>
				);
			})}
		</>
	);
}

export default Home;
