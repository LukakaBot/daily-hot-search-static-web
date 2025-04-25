import { fetchHotSearchList } from '@/api/weibo';

async function Home() {
	const res = await fetchHotSearchList();
	// const result = await fetch('https://hot-search-admin-web.vercel.app');
	// const res = await result.json();
	console.log(res);

	return (
		<>
			<h1>我是首页</h1>
			<div>
				{/* {res.map((item: any) => (
					<div key={item.id}>
						<h2>{item.title}</h2>
					</div>
				))} */}
			</div>
		</>
	);
}

export default Home;
