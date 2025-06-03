import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import React from "react";

export const SmoothContext = React.createContext(null);

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const smoother = ScrollSmoother.get();

    const checkScroll = () => {
      const scrollY = smoother ? smoother.scrollTop() : window.scrollY;
      setVisible(scrollY > 300 && window.innerWidth >= 768);
    };

    checkScroll(); // Initial check
    const interval = setInterval(checkScroll, 200); // Poll scrollTop

    const handleResize = () => {
      checkScroll(); // Re-check visibility on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '30px',
          width: '48px',
          height: '48px',
          backgroundColor: '#49499D',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999,
        }}
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;
