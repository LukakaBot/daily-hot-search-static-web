import type { Metadata } from 'next';
import Provider from './provider';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import Content from '@/components/layout/Content';
import Footer from '@/components/layout/Footer/Footer';

export const metadata: Metadata = {
	title: 'Next.js Template',
	description: 'Next.js Template',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
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
