import React from 'react';

export function useIsScrolling() {
  const [isScrolling, setIsScrolling] = React.useState(false);
  const prevScrollY = React.useRef(0);

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (
        prevScrollY.current !== currentScrollY &&
        currentScrollY >= 10 &&
        !isScrolling
      ) {
        setIsScrolling(true);

        setTimeout(() => {
          setIsScrolling(false);
        }, 100);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return isScrolling;
}
