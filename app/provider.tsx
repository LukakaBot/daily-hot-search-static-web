'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { HeroUIProvider } from '@heroui/react';
import ThemeProvider from '@/components/theme/ThemeProvider';
import setupPlugin from '@/plugin';

function Providers({ children }: React.PropsWithChildren) {
	setupPlugin();

	return (
		<AntdRegistry>
			<HeroUIProvider>
				<ThemeProvider defaultTheme='light'>{children}</ThemeProvider>
			</HeroUIProvider>
		</AntdRegistry>
	);
}

export default Providers;
