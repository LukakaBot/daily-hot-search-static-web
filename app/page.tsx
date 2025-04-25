import { fetchHotSearchList } from '@/api/weibo';

async function Home() {
	const res = await fetchHotSearchList();
	console.log(res);

	return (
		<>
			<h1>我是首页</h1>
		</>
	);
}

export default Home;
