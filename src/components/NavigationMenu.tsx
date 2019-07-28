import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import {SECTIONS} from '../config';

import styles from './navigationMenu.module.scss';
import LocalizedLink from './LocalizedLink';

interface NavigationMenuProps {
  readonly pageStyle: 'home' | 'default';
}

class NavigationMenu extends React.Component<NavigationMenuProps> {
  state = {
    menuOpen: false
  };

  private handleMenuClick(): void {
    this.setState(() => ({
      menuOpen: this.state.menuOpen ? false : true
    }));
  }

  private handleMenuHover(): void {
    this.setState(() => ({
      menuOpen: true
    }));
  }

  private handleMenuClose(): void {
    this.setState(() => ({
      menuOpen: false
    }));
  }

  private renderSectionLinks(sections: string[]): JSX.Element | null {
    const sectionsExcludingCompany = sections.filter(
      section => section !== 'company'
    );

    if (this.state.menuOpen) {
      return (
        <ul
          className={styles.menuList}
          onMouseLeave={() => this.handleMenuClose()}
        >
          {sectionsExcludingCompany.map(section => (
            <LocalizedLink key={section} to={`/#${section}`}>
              <Translated id={`${section}-header`} />
            </LocalizedLink>
          ))}
        </ul>
      );
    }
    return null;
  }

  public render(): JSX.Element {
    return (
      <div
        className={
          this.props.pageStyle === 'home'
            ? styles.homeMenuContainer
            : styles.defaultMenuContainer
        }
      >
        <button
          className={styles.menuButton}
          onMouseEnter={() => this.handleMenuHover()}
          onClick={() => this.handleMenuClick()}
        >
          <img
            src={require(`../styling/icons/menu${
              this.props.pageStyle === 'home' ? '-white.svg' : '-brown.svg'
            }`)}
            alt="Menu"
          />
        </button>
        {this.renderSectionLinks(SECTIONS)}
      </div>
    );
  }
}

export default NavigationMenu;
