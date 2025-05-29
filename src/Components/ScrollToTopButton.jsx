import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    const toggleVisibility = () => {
      if (window.scrollY > 300 && window.innerWidth >= 992) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', checkDevice);

    // Initial check
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && isDesktop && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '30px',
          backgroundColor: '#49499D',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          padding: '12px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;
