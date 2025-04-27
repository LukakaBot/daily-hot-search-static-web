'use client';

import { HeroUIProvider } from '@heroui/react';
import ThemeProvider from '@/components/theme/ThemeProvider';
import setupPlugin from '@/plugin';

function Providers({ children }: React.PropsWithChildren) {
	setupPlugin();

	return (
		<>
			<HeroUIProvider>
				<ThemeProvider defaultTheme='light'>{children}</ThemeProvider>
			</HeroUIProvider>
		</>
	);
}

export default Providers;
