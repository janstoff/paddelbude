import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import {SECTIONS} from '../config';
import styles from './footer.module.scss';
import LocalizedLink from '../components/LocalizedLink';
import CompanyModal from '../components/CompanyModal';
import {CloseButton} from '../components/CloseButton';
import footerLogo from '../styling/logos/logo-brown-transparent.png';

class Footer extends React.Component {
  state = {
    companyModalOpen: false
  };

  private handleCompanyClick(): void {
    this.setState(() => ({
      companyModalOpen: this.state.companyModalOpen ? false : true
    }));
    console.log('state', this.state);
  }

  private renderSectionLinks(sections: string[]) {
    return (
      <ul>
        {sections.map(section =>
          section === 'company' ? (
            <li key={section}>
              <a
                className={styles.link}
                onClick={() => this.handleCompanyClick()}
              >
                <Translated id={`${section}-header`} />
              </a>
            </li>
          ) : (
            <li key={section}>
              <LocalizedLink className={styles.link} to={`/#${section}`}>
                <Translated id={`${section}-header`} />
              </LocalizedLink>
            </li>
          )
        )}
      </ul>
    );
  }

  public render(): JSX.Element {
    return (
      <footer className={styles.footer}>
        {this.state.companyModalOpen && (
          <div>
            <CloseButton onClick={() => this.handleCompanyClick()} />
            <CompanyModal />
          </div>
        )}
        <div className={styles.main}>
          <div className={styles.logoWrapper}>
            <LocalizedLink to="/">
              <img src={footerLogo} alt="Home" />
            </LocalizedLink>
          </div>
          <div className={styles.navWrapper}>
            <div className={styles.navigation}>
              {this.renderSectionLinks(SECTIONS)}
            </div>
          </div>
        </div>
        <div className={styles.disclaimerWrapper}>
          <div className={styles.disclaimerText}>
            <Translated id="footer-copyright" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
