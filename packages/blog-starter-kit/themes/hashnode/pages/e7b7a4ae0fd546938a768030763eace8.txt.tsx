import { type GetServerSideProps } from 'next';

const BingIndexNowTxt = () => null;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { res } = ctx;

	// This is the Bing IndexNow.txt content (https://www.bing.com/indexnow/getstarted)
	const bingIndexNowTxt = `e7b7a4ae0fd546938a768030763eace8`.trim();

	res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
	res.setHeader('content-type', 'text/plain');
	res.write(bingIndexNowTxt);
	res.end();

	return { props: {} };
};

export default BingIndexNowTxt;
