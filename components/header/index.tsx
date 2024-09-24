import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import {
  headerContainerStyles,
  headerImageStyles,
  headerLogoTextStyles,
  HeaderNavWrapper,
  headerWrapperStyles,
} from '@components/header/styles';
import logoImage from '@images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <CommonFullWidthWrapper
    wrapperCss={headerWrapperStyles}
    css={headerContainerStyles}
    element="header"
  >
    <Image src={logoImage} alt="logo" css={headerImageStyles} />
    <Link href="/" css={headerLogoTextStyles}>
      Beyond Bot
    </Link>
    <HeaderNavWrapper>
      <Link href="/" className="link-animation">
        Home
      </Link>
      <Link href="/services" className="link-animation">
        Services
      </Link>
      <Link href="/partners" className="link-animation">
        Partners
      </Link>
      <Link href="/contact" className="link-animation">
        Contact
      </Link>
    </HeaderNavWrapper>
  </CommonFullWidthWrapper>
);

export default Header;
