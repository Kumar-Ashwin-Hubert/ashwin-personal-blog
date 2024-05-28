import parse from 'html-react-parser';
import Head from 'next/head';

import { useAppContext } from './contexts/appContext';

export const Meta = () => {
	const { publication } = useAppContext();
	const { metaTags, favicon } = publication;
	const defaultFavicons = (
		<>
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2962ff" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="theme-color" content="#131414" />
		</>
	);

	return (
		<Head>
			{favicon ? <link rel="icon" type="image/png" href={favicon} /> : defaultFavicons}
			<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
			<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
			{metaTags && parse(metaTags)}
		</Head>
	);
};
