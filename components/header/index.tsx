import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import {
  headerContainerStyles,
  headerImageStyles,
  HeaderNavWrapper,
  headerWrapperStyles,
} from '@components/header/styles';
import { headerLinks, logo, name } from '@data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();

  const linksMapper = ({ title, url }: (typeof headerLinks)[0]) => (
    <Link
      href={url}
      className={pathname === url ? 'active link-animation' : 'link-animation'}
      key={url}
    >
      {title}
    </Link>
  );

  return (
    <CommonFullWidthWrapper
      wrapperCss={headerWrapperStyles}
      css={headerContainerStyles}
      element="header"
    >
      <Image src={logo.black} alt={name} css={headerImageStyles} height={42} />
      <HeaderNavWrapper>{headerLinks.map(linksMapper)}</HeaderNavWrapper>
    </CommonFullWidthWrapper>
  );
};

export default Header;
