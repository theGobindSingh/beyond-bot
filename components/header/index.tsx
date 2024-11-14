import { Button } from '@components/common-button';
import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import {
  headerContainerStyles,
  headerImageStyles,
  HeaderNavWrapper,
  headerWrapperStyles,
} from '@components/header/styles';
import { headerLinks, logo, name } from '@data';
import { commonLinkStyles } from '@styles/global';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname, push } = useRouter();

  const linksMapper = ({
    title,
    url,
    isButton,
    tryToFindClass,
  }: (typeof headerLinks)[0]) => {
    const getClassName = () => {
      const arr = [];
      if (isButton) {
        arr.push('button');
      } else {
        arr.push('link-animation');
        if (pathname === url) {
          arr.push('active-animation');
        }
      }
      return arr.join(' ');
    };

    const clickHandler = () => {
      if (tryToFindClass) {
        const elem = document.querySelector(`.${tryToFindClass.trim()}`);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        } else {
          void push(url);
        }
      } else {
        void push(url);
      }
    };

    if (isButton) {
      return (
        <Button
          type="button"
          className={getClassName()}
          key={url}
          onClick={clickHandler}
        >
          {title}
        </Button>
      );
    }

    return (
      <Link
        href={url}
        className={getClassName()}
        key={url}
        css={commonLinkStyles}
      >
        {title}
      </Link>
    );
  };

  return (
    <CommonFullWidthWrapper
      wrapperCss={headerWrapperStyles}
      css={headerContainerStyles}
      element="header"
      notFps
    >
      <Image src={logo.black} alt={name} css={headerImageStyles} height={42} />
      <HeaderNavWrapper>{headerLinks.map(linksMapper)}</HeaderNavWrapper>
    </CommonFullWidthWrapper>
  );
};

export default Header;
