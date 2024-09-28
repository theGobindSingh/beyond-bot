import DotBg from '@components/dot-bg-wrapper';
import HeaderFiller from '@components/header-filler';
import { description, name } from '@data';
import HomeHero from '@modules/home/hero';
import HomeServices from '@modules/home/services';
import {
  homeDotBgWrapperStyles,
  homeWrapperStyles,
} from '@modules/home/styles';
import HomeVision from '@modules/home/vision';
import Head from 'next/head';

const Home = () => (
  <DotBg wrapperCss={homeDotBgWrapperStyles} css={homeWrapperStyles}>
    <Head>
      <title>{`${name} | Home`}</title>
      <meta name="description" content={description} />
    </Head>
    <HeaderFiller />
    <HomeHero />
    <HomeServices />
    <HomeVision />
  </DotBg>
);

export default Home;
