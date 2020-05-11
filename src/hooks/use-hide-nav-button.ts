import React from 'react';

export function useHideNavButton() {
  const [shouldHideButton, setShouldHideButton] = React.useState(true);
  const prevScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const viewPortHeight = window.innerHeight;
      const documentTotalHeight = document.body.offsetHeight;

      if (prevScrollY.current - 5 > currentScrollY && !shouldHideButton) {
        setShouldHideButton(true);
      }
      if (
        viewPortHeight + currentScrollY >= documentTotalHeight - 400 &&
        shouldHideButton
      ) {
        setShouldHideButton(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldHideButton]);

  return shouldHideButton;
}
