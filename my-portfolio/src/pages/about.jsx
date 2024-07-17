import React, { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    const aboutText = document.getElementById('about-text');
    aboutText.classList.add('animate-enlarge');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-purple-400 flex items-center justify-center">
      <style>
        {`
          @keyframes enlarge {
            0% { transform: scale(1); }
            100% { transform: scale(1.2); }
          }
          .animate-enlarge {
            animation: enlarge 1.5s ease-in-out;
          }
        `}
      </style>
      <h1 id="about-text" className="text-2xl font-bold text-white mb-6">
        About Me
      </h1>
      <p className="text-lg text-white">
        I'm a passionate frontend developer with a keen eye for design and user experience.
      </p>
    </div>
  );
};

export default AboutPage;
