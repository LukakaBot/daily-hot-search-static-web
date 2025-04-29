'use client';

import { fetchWeiboHotSearchList } from '@/api/hotSearch';
import { useEffect, useState } from 'react';
import { HotSearchDataItem } from '@/api/common/types';
import { useLoading } from '@/hook';

function Home() {
	const [hotSearchData, setHotSearchData] = useState<HotSearchDataItem[]>([]);
	const [loading, setLoading] = useLoading();

	const getData = async () => {
		try {
			setLoading(true);
			const data = await fetchWeiboHotSearchList();
			setHotSearchData(data);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='w-full'>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				<div className='card bg-base-100 w-96 shadow-sm'>
					<div className='card-body'>
						<h2 className='card-title'>微博热搜</h2>
						<div className='h-[300px] overflow-hidden hover:overflow-auto'>
							{loading ? (
								<div className='flex justify-center items-center h-full'>
									<span className='loading loading-spinner loading-xl'></span>
								</div>
							) : (
								hotSearchData.map((item) => {
									return (
										<div key={item.id}>
											<p>{item.title}</p>
										</div>
									);
								})
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
