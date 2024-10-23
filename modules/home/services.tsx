import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import Heading from '@components/heading';
import { H3, P } from '@components/html';
import { homeServices } from '@data';
import {
  HomeServiceCard,
  HomeServicesCardsWrapper,
  homeServicesContainerStyles,
} from '@modules/home/styles';
import Image from 'next/image';

const mapper = ({ title, text, imgUrl }: (typeof homeServices.services)[0]) => (
  <HomeServiceCard key={`home-service-${title}`}>
    <Image src={imgUrl} alt={title} width={50} height={50} />
    <H3 $margin="0">{title}</H3>
    <P $margin="0" $lineHeight="2rem" className="text">
      {text}
    </P>
  </HomeServiceCard>
);

const HomeServices = () => (
  <CommonFullWidthWrapper bg="white" css={homeServicesContainerStyles}>
    <Heading
      text={homeServices.title}
      cursiveTextIndex={homeServices.changedFont}
    />
    <HomeServicesCardsWrapper>
      {homeServices.services.map(mapper)}
    </HomeServicesCardsWrapper>
  </CommonFullWidthWrapper>
);

export default HomeServices;
