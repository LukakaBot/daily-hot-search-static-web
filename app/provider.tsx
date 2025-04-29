'use client';

import '@/style/index';
import ThemeProvider from '@/components/theme/ThemeProvider';
import setupPlugin from '@/plugin';

function Providers({ children }: React.PropsWithChildren) {
	setupPlugin();

	return <ThemeProvider defaultTheme='light'>{children}</ThemeProvider>;
}

export default Providers;
