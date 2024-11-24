import { Link } from '@components/common-button';
import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import {
  HamLine,
  HamWrapper,
  headerContainerStyles,
  headerImageStyles,
  HeaderNavWrapper,
  headerWrapperStyles,
  lowerLinkStyles,
  SideBarLower,
  SideBarUpper,
  SideBarWrapper,
} from '@components/header/styles';
import Heading from '@components/heading';
import { headerContent, headerLinks, logo, name } from '@data';
import { commonLinkStyles } from '@styles/global';
import Image from 'next/image';
import A from 'next/link';
import { useRouter } from 'next/router';
import { MouseEventHandler, useRef } from 'react';

const { changedFont, link, title } = headerContent;

const Header = () => {
  const { pathname } = useRouter();
  const sideBarRef = useRef<HTMLDivElement>(null);
  const headerNavRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  const hamClickHandler: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    currentTarget?.classList.toggle('active');
    sideBarRef.current?.classList.toggle('active');
    headerNavRef.current?.classList.toggle('hidden');
    logoRef.current?.classList.toggle('hidden');
  };

  const sideNavLinksMapper = ({ title, url }: (typeof headerLinks)[0]) => {
    const key = 'side-' + url;
    return (
      <A
        href={url}
        key={key}
        className="side-link-upper"
        css={commonLinkStyles}
      >
        {title}
      </A>
    );
  };

  const linksMapper = ({
    title,
    url,
    isButton,
    // tryToFindClass,
  }: (typeof headerLinks)[0]) => {
    const getClassName = () => {
      const arr = [];
      if (isButton) {
        arr.push('button');
      } else {
        arr.push('link link-animation');
        if (pathname === url) {
          arr.push('link active-animation');
        }
      }
      return arr.join(' ');
    };

    // const clickHandler = () => {
    //   if (tryToFindClass) {
    //     const elem = document.querySelector(`.${tryToFindClass.trim()}`);
    //     if (elem) {
    //       elem.scrollIntoView({ behavior: 'smooth' });
    //     } else {
    //       void push(url);
    //     }
    //   } else {
    //     void push(url);
    //   }
    // };

    // if (isButton) {
    //   return (
    //     <Button
    //       type="button"
    //       className={getClassName()}
    //       key={url}
    //       onClick={clickHandler}
    //     >
    //       {title}
    //     </Button>
    //   );
    // }

    return (
      <Link
        href={url}
        className={getClassName()}
        key={url}
        css={!isButton && commonLinkStyles}
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
      <Image
        ref={logoRef}
        src={logo.black}
        alt={name}
        css={headerImageStyles}
        height={42}
      />
      <HeaderNavWrapper ref={headerNavRef}>
        {headerLinks.map(linksMapper)}
      </HeaderNavWrapper>
      <HamWrapper aria-label="menu" type="button" onClick={hamClickHandler}>
        <HamLine className="line _1" />
        <HamLine className="line _2" />
        <HamLine className="line _3" />
      </HamWrapper>
      <SideBarWrapper ref={sideBarRef}>
        <SideBarUpper>
          <Image src={logo.black} alt={name} height={70} />
          {headerLinks.map(sideNavLinksMapper)}
        </SideBarUpper>
        <SideBarLower>
          <Heading
            $size="2xl"
            text={title}
            cursiveTextIndex={changedFont}
            element="h2"
            $color="white"
            className="lower-heading"
          />
          <Link href={link.url} css={lowerLinkStyles}>
            {link.text}
          </Link>
        </SideBarLower>
      </SideBarWrapper>
    </CommonFullWidthWrapper>
  );
};

export default Header;
