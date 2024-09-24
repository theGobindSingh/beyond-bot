import DotBg from '@components/dot-bg-wrapper';
import { H1, P } from '@components/html';
import {
  homeDotBgWrapperStyles,
  homeLinkStyles,
  homeWrapperStyles,
} from '@modules/home/styles';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

const HomeLottie = dynamic(() => import('@components/home-lottie'));

const Home = () => (
  <DotBg wrapperCss={homeDotBgWrapperStyles} css={homeWrapperStyles}>
    <Head>
      <title>Beyond Bot | Home</title>
      <meta name="description" content="Beyond Bot | Home" />
    </Head>
    <div>
      <H1>Revolutionize your website with our AI agents</H1>
      <P>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
        voluptatibus! Dolore impedit error, dolorum culpa voluptas cupiditate
        tenetur consequuntur illum?
      </P>
      <Link href="/services" css={homeLinkStyles}>
        Try a demo
      </Link>
    </div>
    <HomeLottie />
  </DotBg>
);

export default Home;
