import React, {FunctionComponent} from 'react';
import {Link} from 'gatsby';
import {useIntl} from 'react-intl';

import locales from '../config/locales';

interface LocalizedLinkProps {
  readonly to: string;
  readonly children?: any;
  readonly className?: string;
  readonly style?: object;
  readonly onClick?: React.MouseEventHandler<HTMLElement>;
  readonly onHover?: React.MouseEventHandler<HTMLElement>;
}

const LocalizedLink: FunctionComponent<LocalizedLinkProps> = ({
  to,
  children,
  onHover,
  ...props
}) => {
  const {locale} = useIntl();
  const path = locales[locale].default ? to : `/${locale}${to}`;

  return (
    <Link {...props} onMouseOver={onHover} to={path}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
