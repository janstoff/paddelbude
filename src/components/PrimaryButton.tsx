import React from 'react';

import styles from './primaryButton.module.scss';

interface PrimaryButtonProps {
  readonly type?: 'button' | 'submit' | 'reset' | undefined;
  readonly children: any;
  readonly sticky?: boolean;
  readonly size?: 'large' | 'small';
}

const PrimaryButton: React.SFC<PrimaryButtonProps> = ({
  type,
  children,
  sticky = false,
  size = 'large',
}: PrimaryButtonProps) => (
  <button
    type={type}
    className={
      sticky
        ? size === 'large'
          ? styles.buttonPrimaryStickyLarge
          : styles.buttonPrimaryStickySmall
        : size === 'large'
        ? styles.buttonPrimaryLarge
        : styles.buttonPrimarySmall
    }
  >
    {children}
  </button>
);

export default PrimaryButton;
