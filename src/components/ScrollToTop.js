import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On every route change, jump (not glide) to the top before the new page paints.
// The site uses `scroll-behavior: smooth` globally; `behavior: 'instant'` overrides it.
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch {
      // Older browsers without 'instant': switch smooth scrolling off for this one call.
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      root.getBoundingClientRect(); // apply the style change before scrolling
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previous;
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
