import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import Heading from '@components/heading';
import { H3, P } from '@components/html';
import { homeServices } from '@data';
import {
  HomeServiceCard,
  HomeServicesCardsWrapper,
  homeServicesContainerStyles,
  homeServicesWrapperStyles,
} from '@modules/home/styles';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

const mapper = ({ title, text, imgUrl }: (typeof homeServices.services)[0]) => {
  const clickHandler: MouseEventHandler<HTMLDivElement> = ({
    currentTarget,
  }) => {
    currentTarget?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };
  return (
    <HomeServiceCard key={`home-service-${title}`} onClick={clickHandler}>
      <Image src={imgUrl} alt={title} width={250} height={250} />
      <H3 $margin="0" $weight="600" $size="m">
        {title}
      </H3>
      <P $margin="0" $lineHeight="2rem" className="text">
        {text}
      </P>
    </HomeServiceCard>
  );
};

const HomeServices = () => (
  <CommonFullWidthWrapper
    bg="white"
    css={homeServicesContainerStyles}
    wrapperCss={homeServicesWrapperStyles}
  >
    <Heading
      text={homeServices.title}
      cursiveTextIndex={homeServices.changedFont}
      className="services-heading"
    />
    <HomeServicesCardsWrapper>
      {homeServices.services.map(mapper)}
    </HomeServicesCardsWrapper>
  </CommonFullWidthWrapper>
);

export default HomeServices;
