'use client';

import { HeroUIProvider } from '@heroui/react';
import ThemeProvider from '@/components/theme/ThemeProvider';
import setupPlugin from '@/plugin';

function Providers({ children }: { children: React.ReactNode }) {
	setupPlugin();

	return (
		<>
			<HeroUIProvider>
				<ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
			</HeroUIProvider>
		</>
	);
}

export default Providers;
