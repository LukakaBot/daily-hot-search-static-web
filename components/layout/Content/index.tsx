'use client';

import React from 'react';
import { useTheme } from 'next-themes';

function Content({ children }: React.PropsWithChildren) {
	const { theme } = useTheme();

	return (
		<main
			className={`${
				theme === 'dark' ? 'dark' : 'light'
			} text-foreground bg-background lg:w-[1800px] m-4`}
		>
			{children}
		</main>
	);
}

export default Content;
