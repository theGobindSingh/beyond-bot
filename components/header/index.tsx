import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import {
  headerContainerStyles,
  headerImageStyles,
  headerWrapperStyles,
} from '@components/header/styles';
import logoImage from '@images/logo.png';
import { headerHeight } from '@styles/global';
import Image from 'next/image';

const Header = () => (
  <CommonFullWidthWrapper
    wrapperCss={headerWrapperStyles}
    css={headerContainerStyles}
  >
    <Image
      src={logoImage}
      alt="logo"
      height={headerHeight}
      width={headerHeight}
      css={headerImageStyles}
    />
  </CommonFullWidthWrapper>
);

export default Header;
