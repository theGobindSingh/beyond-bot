import DotBgSection from '@components/dot-bg-section';
import Heading from '@components/heading';
import { H2, P } from '@components/html';
import { partnerPageData } from '@data';
import {
  BgGradient,
  IdealPartnerCard,
  IdealPartnerCardsWrapper,
  idealPartnerWrapperStyles,
} from '@modules/partner/styles';
import Image from 'next/image';

const {
  idealPartner: { cards, changedFont, title },
} = partnerPageData;

const idealPartnerCardMapper = (
  { title: cardTitle, description: cardDesc, img }: (typeof cards)[0],
  index: number,
) => {
  const key = `ideal-partner-card-${index}`;
  return (
    <IdealPartnerCard key={key}>
      <Image src={img} alt="" className="card-img" />
      <div className="card-text-content">
        <H2 $margin="0" $size="1xl" className="card-heading">
          {cardTitle}
        </H2>
        <P $margin="0" $size="1xs" className="card-text" $weight="500">
          {cardDesc}
        </P>
      </div>
    </IdealPartnerCard>
  );
};

const IdealPartner = () => {
  return (
    <DotBgSection
      notFps
      wrapperCss={idealPartnerWrapperStyles}
      className="ideal-container"
    >
      <Heading
        className="main-heading"
        text={title}
        cursiveTextIndex={changedFont}
        $margin="0"
      />
      <IdealPartnerCardsWrapper>
        {cards.map(idealPartnerCardMapper)}
      </IdealPartnerCardsWrapper>
      <BgGradient className="_1" />
      <BgGradient className="_2" />
      <BgGradient className="_3" />
    </DotBgSection>
  );
};

export default IdealPartner;
