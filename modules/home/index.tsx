import ContactSection from '@components/contact-section';
import FullPageScroll from '@components/full-page-scroll';
import { description, name } from '@data';
import HomeHero from '@modules/home/hero';
import HomeServices from '@modules/home/services';
import HomeVision from '@modules/home/vision';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>{`${name} | Home`}</title>
      <meta name="description" content={description} />
    </Head>
    <FullPageScroll>
      <HomeHero />
      <HomeServices />
      <HomeVision />
      <ContactSection />
    </FullPageScroll>
  </>
);

export default Home;
