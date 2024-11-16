import { Link } from '@components/common-button';
import DotBgSection from '@components/dot-bg-section';
import Heading from '@components/heading';
import { H2, P } from '@components/html';
import { partnerPageData } from '@data';
import {
  WhyPartnerCard,
  WhyPartnerLower,
  WhyPartnerUpper,
  whyPartnerWrapperStyles,
} from '@modules/partner/styles';
import Image from 'next/image';

const { title, changedFont, whyPartner, link } = partnerPageData;

const whyPartnerCardMapper = (
  { description, img, title }: (typeof whyPartner)[0],
  index: number,
) => {
  const key = `why-partner-card-${index}`;
  return (
    <WhyPartnerCard key={key}>
      <Image src={img} alt="" priority className="card-img" />
      <H2 $margin="0" $size="m" className="card-heading">
        {title}
      </H2>
      <P $margin="0" $size="2xs" $weight="500" className="card-text">
        {description}
      </P>
    </WhyPartnerCard>
  );
};

const WhyPartner = () => {
  return (
    <DotBgSection
      notFps
      wrapperCss={whyPartnerWrapperStyles}
      className="main-container"
    >
      <WhyPartnerUpper>
        <Heading
          className="main-heading"
          text={title}
          cursiveTextIndex={changedFont}
          $margin="0"
        />
        <Link href={link?.url ?? '/contact'} className="main-link">
          {link?.text ?? 'Become a Partner'}
        </Link>
      </WhyPartnerUpper>
      <WhyPartnerLower>{whyPartner.map(whyPartnerCardMapper)}</WhyPartnerLower>
    </DotBgSection>
  );
};

export default WhyPartner;
