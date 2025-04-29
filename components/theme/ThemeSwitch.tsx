'use client';

import { useEffect, useState } from 'react';
// import { Switch } from '@heroui/react';
import { useTheme } from 'next-themes';
import BaseIcon from '@/components/Base/Icon';

function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<div className='flex'>
				{/* <Switch
					defaultSelected
					value={theme}
					thumbIcon={({ isSelected, className }) =>
						isSelected ? (
							<BaseIcon
								className={className}
								name='icon-[ep--sunny]'
								size={20}
								color='#000'
							/>
						) : (
							<BaseIcon
								className={className}
								name='icon-[ep--moon]'
								size={20}
								color='#000'
							/>
						)
					}
					onValueChange={(value) => setTheme(value ? 'light' : 'dark')}
				/> */}
				{/* <label className='toggle text-base-content'>
					<input
						type='checkbox'
						checked={theme === 'dark' ? false : true}
						onChange={(e) => {
							console.log(e);
							setTheme(e.target.checked ? 'light' : 'dark');
						}}
					/>
					<BaseIcon aria-label='enabled' name='icon-[ep--sunny]' />
					<BaseIcon aria-label='disabled' name='icon-[ep--moon]' />
				</label> */}
			</div>
		</>
	);
}

export default ThemeSwitch;
