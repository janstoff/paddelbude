import React from 'react';
import {Helmet} from 'react-helmet';
import {
  IntlProvider,
  addLocaleData,
  FormattedMessage as Translated
} from 'react-intl';
import CookieConsent from 'react-cookie-consent';

//Config
import {APP_NAME} from '../config';

// Styling
import styles from './app.module.scss';

// Components
import Footer from './Footer';
import Header from './Header';
import LocalizedLink from '../components/LocalizedLink';

// Locale data
import enData from 'react-intl/locale-data/en';
import deData from 'react-intl/locale-data/de';

// Translations
import en from '../i18n/en.json';
import de from '../i18n/de.json';

const translations = {en, de};

addLocaleData([...enData, ...deData]);

interface AppProps {
  readonly locale: string;
  readonly pageStyle?: 'home' | 'default';
  readonly children: any;
}

const BackToTopLink = () => (
  <LocalizedLink to="/" style={{textDecoration: 'none', color: 'inherit'}}>
    <Translated id="back-to-top-link" />
  </LocalizedLink>
);

const AppLayout: React.FunctionComponent<AppProps> = ({
  locale,
  pageStyle = 'default',
  children
}: AppProps) => (
  <IntlProvider
    locale={locale}
    messages={translations[locale]}
    textComponent={React.Fragment}
  >
    <div className={styles.App}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{APP_NAME}</title>
      </Helmet>
      <CookieConsent
        location="bottom"
        buttonText="Ok!"
        cookieName="consent cookie"
        style={{background: '#5f5a5a'}}
        buttonStyle={{
          background: '#f5f5f5',
          color: '#2c2b2b',
          fontSize: '13px',
          borderRadius: '5px'
        }}
        expires={150}
      >
        <Translated id="cookies-main" />
      </CookieConsent>
      <Header locale={locale} pageStyle={pageStyle} />
      {children}
      <BackToTopLink />
      <Footer />
    </div>
  </IntlProvider>
);

export default AppLayout;
