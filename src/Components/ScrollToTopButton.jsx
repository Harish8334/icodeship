
import  { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    visible && (
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
