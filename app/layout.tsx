import type { Metadata } from 'next';
import Provider from './provider';
import Header from '@/components/layout/Header/Header';
import Content from '@/components/layout/Content';
import Footer from '@/components/layout/Footer/Footer';
import React from 'react';

export const metadata: Metadata = {
	title: 'Next.js Template',
	description: 'Next.js Template',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</head>
			<body className='min-h-screen'>
				<Provider>
					<Header />
					<Content>{children}</Content>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
