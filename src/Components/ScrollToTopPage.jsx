import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Just jump to the top of the page instantly
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTopPage;
