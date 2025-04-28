'use client';

import { Button, Flex } from 'antd';
import { Card, CardHeader, CardBody } from '@heroui/react';
import { fetchWeiboHotSearchList } from '@/api/hotSearch';
import { useEffect, useState } from 'react';
import { HotSearchDataItem } from '@/api/common/types';

function Home() {
	const [hotSearchData, setHotSearchData] = useState<HotSearchDataItem[]>([]);

	const getData = async () => {
		const data = await fetchWeiboHotSearchList();
		setHotSearchData(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<h1>我是首页</h1>
			<Flex gap='small' wrap>
				<Button type='primary'>Primary Button</Button>
				<Button>Default Button</Button>
				<Button type='dashed'>Dashed Button</Button>
				<Button type='text'>Text Button</Button>
				<Button type='link'>Link Button</Button>
			</Flex>
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
