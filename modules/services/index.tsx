import DotBgSection from '@components/dot-bg-section';
import Heading from '@components/heading';
import { description, name, servicesPageData } from '@data';
import {
  ServicesLowerContainer,
  ServicesLowerWrapper,
  servicesMainContainerStyles,
  servicesMainWrapperStyles,
  ServicesUpperContainer,
} from '@modules/services/styles';
import Head from 'next/head';

const { title, changedFont } = servicesPageData;

const ServicesModule = () => (
  <>
    <Head>
      <title>{`${name} | Services`}</title>
      <meta name="description" content={description} />
    </Head>
    <DotBgSection
      wrapperCss={servicesMainWrapperStyles}
      css={servicesMainContainerStyles}
    >
      <ServicesUpperContainer>
        <Heading
          text={title}
          cursiveTextIndex={changedFont}
          element="h1"
          className="services-heading"
          $margin="0"
        />
      </ServicesUpperContainer>
      <ServicesLowerWrapper>
        <ServicesLowerContainer>Under Dev</ServicesLowerContainer>
      </ServicesLowerWrapper>
    </DotBgSection>
  </>
);

export default ServicesModule;
