import React, {FunctionComponent} from 'react';

import styles from './header.module.scss';

import LanguageSwitch from '../components/LanguageSelect';
import NavigationMenu from '../components/NavigationMenu';
import SocialLinks from '../components/SocialLinks';
import LocalizedLink from '../components/LocalizedLink';
import {SOCIAL_LINKS} from '../config';
import homeHeaderLogo from '../styling/logos/logo-white-transparent.png';
import defaultHeaderLogo from '../styling/logos/logo-brown-transparent.png';

interface HomeLinkProps {
  readonly headerLogo: string;
}

interface HeaderProps {
  readonly locale: string;
  readonly pageStyle: 'default' | 'home';
}

function HomeLink({headerLogo}: HomeLinkProps): JSX.Element {
  return (
    <LocalizedLink className={styles.homeLink} to="/">
      <img src={headerLogo} alt="Home" />
    </LocalizedLink>
  );
}

const Header: FunctionComponent<HeaderProps> = ({
  locale,
  pageStyle
}: HeaderProps) => (
  <div className={styles.header}>
    <HomeLink
      headerLogo={pageStyle === 'home' ? homeHeaderLogo : defaultHeaderLogo}
    />
    <SocialLinks socialLinks={SOCIAL_LINKS} pageStyle={pageStyle} />
    <LanguageSwitch locale={locale} />
    <NavigationMenu pageStyle={pageStyle} />
  </div>
);

export default Header;
