import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import {DESTINATIONS, PAGES} from '../config';

import styles from './navigationMenu.module.scss';
import LocalizedLink from './LocalizedLink';
import {PageStyle} from '../layout/App';

interface NavigationMenuProps {
  readonly pageStyle: PageStyle;
}

const NavigationMenu: React.SFC<NavigationMenuProps> = ({
  pageStyle,
}: NavigationMenuProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function renderPageLinks(
    pages: string[],
    destinations: string[],
    pageStyle: PageStyle
  ): JSX.Element | null {
    if (menuOpen) {
      return (
        <ul
          className={
            pageStyle === 'home' ? styles.homeMenuList : styles.defaultMenuList
          }
        >
          {pages.map((page) => (
            <LocalizedLink key={page} to={`/${page === 'home' ? '' : page}`}>
              <Translated id={`${page}-menu-entry`} />
            </LocalizedLink>
          ))}
          <hr
            className={
              pageStyle === 'home' ? styles.dividerHome : styles.divider
            }
          />
          {destinations.map((destination) => (
            <LocalizedLink
              key={destination}
              to={`/${destination === 'home' ? '' : destination}`}
            >
              <Translated id={`${destination}-menu-entry`} />
            </LocalizedLink>
          ))}
        </ul>
      );
    }
    return null;
  }

  return (
    <div
      className={
        pageStyle === 'home'
          ? styles.homeMenuContainer
          : styles.defaultMenuContainer
      }
      onMouseLeave={() => setMenuOpen(false)}
    >
      <button
        className={menuOpen ? styles.menuButtonActive : styles.menuButton}
        onMouseEnter={() => setMenuOpen(true)}
        onClick={() => setMenuOpen(menuOpen ? false : true)}
      >
        <img
          src={require(`../styling/icons/menu${
            pageStyle === 'home' ? '-white.svg' : '-brown.svg'
          }`)}
          alt="Menu"
        />
      </button>
      {renderPageLinks(PAGES, DESTINATIONS, pageStyle)}
    </div>
  );
};

export default NavigationMenu;
