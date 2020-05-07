import React from 'react';

import styles from './primaryButton.module.scss';
import LocalizedLink from './LocalizedLink';

interface PrimaryButtonProps {
  readonly type?: 'button' | 'submit' | 'reset' | undefined;
  readonly children: any;
  readonly size?: 'large' | 'small';
  readonly link?: boolean;
  readonly linkTo?: string;
  readonly onClick?: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  >;
  readonly onHover?: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  >;
}

const PrimaryButton: React.SFC<PrimaryButtonProps> = ({
  type,
  children,
  size = 'large',
  link = false,
  linkTo,
  onHover,
  onClick,
}: PrimaryButtonProps) =>
  link ? (
    <LocalizedLink
      className={
        size === 'large' ? styles.buttonPrimaryLarge : styles.buttonPrimarySmall
      }
      to={linkTo || ''}
      onClick={onClick}
      onHover={onHover}
    >
      {children}
    </LocalizedLink>
  ) : (
    <button
      type={type}
      className={
        size === 'large' ? styles.buttonPrimaryLarge : styles.buttonPrimarySmall
      }
      onClick={onClick}
      onMouseOver={onHover}
    >
      {children}
    </button>
  );

export default PrimaryButton;
