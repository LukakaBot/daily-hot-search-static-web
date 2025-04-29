'use client';

import ThemeSwitch from '@/components/theme/ThemeSwitch';

function Header() {
	return (
		<header className='flex justify-center items-center mx-auto px-2 rounded-md'>
			<h1>我是头部</h1>
			<ThemeSwitch />
		</header>
	);
}

export default Header;
