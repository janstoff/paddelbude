import React, {FunctionComponent} from 'react';
import styles from './socialLinks.module.scss';
import InstagramLogo from '../styling/icons/instagram.inline.svg';
import {PageStyle} from '../layout/App';

interface SocialLinksProps {
  readonly pageStyle: PageStyle;
}

const SocialLinks: FunctionComponent<SocialLinksProps> = ({
  pageStyle,
}: SocialLinksProps) => (
  <div className={styles.container}>
    <a
      className={
        pageStyle === 'home' ? styles.socialIcon : styles.socialIconDark
      }
      href="https://www.instagram.com/paddelbude/"
    >
      <InstagramLogo />
    </a>
  </div>
);

export default SocialLinks;
