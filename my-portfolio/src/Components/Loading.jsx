import React, { useEffect } from 'react';
import './Loading.css'; // Import custom CSS for the loading animation

const Loading = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="loading-container">
        <div className="loading-line">
          <div className="loading-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
