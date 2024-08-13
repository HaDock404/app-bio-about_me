import React, { useState, useEffect } from 'react';
import '../styles/loading_screen.css';

function LoadingScreen ({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Vous pouvez ajuster la durée du chargement ici

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingScreen;
