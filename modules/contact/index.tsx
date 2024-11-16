import DotBgSection from '@components/dot-bg-section';
import Heading from '@components/heading';
import { P } from '@components/html';
import { contactPageData, description, name } from '@data';
import MyCustomGForm from '@modules/contact/form';
import {
  ContactLowerContainer,
  ContactLowerWrapper,
  contactMainContainerStyles,
  contactMainWrapperStyles,
  ContactUpperContainer,
} from '@modules/contact/styles';
import Head from 'next/head';
import Image from 'next/image';

const { changedFont, img, subtitle, title } = contactPageData;

const Contact = () => {
  return (
    <>
      <Head>
        <title>{`${name} | Contact`}</title>
        <meta name="description" content={description} />
      </Head>
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
    </>
  );
};

export default Contact;
