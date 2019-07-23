import React, {FunctionComponent} from 'react';

import styles from './header.module.scss';

import LanguageSwitch from '../components/LanguageSelect';
import NavigationMenu from '../components/NavigationMenu';
import SocialLinks from '../components/SocialLinks';
import LocalizedLink from '../components/LocalizedLink';
import {SOCIAL_LINKS} from '../config';
import headerLogo from '../styling/logos/logo-white-transparent.png';

interface HeaderProps {
  readonly locale: string;
}

const HomeLink: FunctionComponent = () => (
  <LocalizedLink className={styles.homeLink} to="/">
    <img src={headerLogo} alt="Home" />
  </LocalizedLink>
);

const Header: FunctionComponent<HeaderProps> = ({locale}: HeaderProps) => (
  <div className={styles.header}>
    <HomeLink />
    <SocialLinks socialLinks={SOCIAL_LINKS} />
    <LanguageSwitch locale={locale} />
    <NavigationMenu />
  </div>
);

export default Header;
