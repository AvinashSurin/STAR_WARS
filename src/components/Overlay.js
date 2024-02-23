import React, { useState, useEffect } from 'react';
import './Overlay.css'; // Import CSS file

const Overlay = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="overlay" className={isActive ? 'active' : ''}>
      <p id="text">A long time ago in a galaxy far, far away...</p>
    </div>
  );
};

export default Overlay;
