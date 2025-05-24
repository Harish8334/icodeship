// Components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
   <div className="loader-overlay top-0 start-0 w-100 h-100 bg-white z-10 d-flex justify-content-center align-items-center position-fixed ">
      <div className="spinner rounded-circle"></div>
    </div>

  );
};

export default Loader;
