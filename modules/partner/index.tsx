import { description, name } from '@data';
import IdealPartner from '@modules/partner/ideal-partner';
import WhyPartner from '@modules/partner/why-partner';
import Head from 'next/head';

const Partner = () => {
  return (
    <>
      <Head>
        <title>{`${name} | Partner`}</title>
        <meta name="description" content={description} />
      </Head>
      <WhyPartner />
      <IdealPartner />
    </>
  );
};

export default Partner;
