import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import {
  footerContainerStyles,
  FooterCopyRight,
  FooterEmail,
  FooterImageContainer,
  footerImageStyles,
  FooterLocation,
  FooterLogoText,
  FooterMidContainer,
  FooterRule,
  footerWrapperStyles,
} from '@components/footer/styles';
import { copyrightText, email, location, logo, name } from '@data';
import Image from 'next/image';
import { Fragment } from 'react';

const copyrightMapper = (copyrightTextPart: string) => (
  <Fragment key={`footer-ct-${copyrightTextPart}`}>
    {copyrightTextPart}
    <br />
  </Fragment>
);

const Footer = () => (
  <CommonFullWidthWrapper
    element="footer"
    css={footerContainerStyles}
    wrapperCss={footerWrapperStyles}
  >
    <FooterImageContainer>
      <Image
        src={logo.colored}
        alt={name}
        css={footerImageStyles}
        height={42}
      />
      <FooterLogoText>{name}</FooterLogoText>
    </FooterImageContainer>
    <FooterMidContainer>
      <FooterEmail className="link-animation" href={`mailto:${email}`}>
        {email}
      </FooterEmail>
      <FooterRule />
      <FooterLocation>{location}</FooterLocation>
    </FooterMidContainer>
    <FooterCopyRight>
      {copyrightText.split('\n').map(copyrightMapper)}
    </FooterCopyRight>
  </CommonFullWidthWrapper>
);

export default Footer;
