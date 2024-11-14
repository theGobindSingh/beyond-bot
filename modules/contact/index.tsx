import DotBgSection from '@components/dot-bg-section';
import Heading from '@components/heading';
import { P } from '@components/html';
import { contactPageData } from '@data';
import MyCustomGForm from '@modules/contact/form';
import {
  ContactLowerContainer,
  ContactLowerWrapper,
  contactMainContainerStyles,
  contactMainWrapperStyles,
  ContactUpperContainer,
} from '@modules/contact/styles';
import Image from 'next/image';

const { changedFont, img, subtitle, title } = contactPageData;

const Contact = () => {
  return (
    <DotBgSection
      wrapperCss={contactMainWrapperStyles}
      css={contactMainContainerStyles}
    >
      <ContactUpperContainer>
        <Heading
          text={title}
          cursiveTextIndex={changedFont}
          className="heading"
          $margin="0"
        />
        <P className="text">{subtitle}</P>
      </ContactUpperContainer>
      <ContactLowerWrapper>
        <ContactLowerContainer>
          <MyCustomGForm />
          <Image className="img" src={img} alt="" priority />
        </ContactLowerContainer>
      </ContactLowerWrapper>
    </DotBgSection>
  );
};

export default Contact;
