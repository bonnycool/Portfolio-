import React, { useState, useEffect } from 'react';
import Loading from '../Components/Loading';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './homepage.css';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [soundMuted, setSoundMuted] = useState(true);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 100;
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 2;
      newStars.push({ x, y, duration });
    }
    setStars(newStars);
  }, []);

  const toggleSound = () => {
    setSoundMuted(!soundMuted);
  };

  if (loading) {
    return <Loading setLoading={setLoading} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted={soundMuted} className="video-bg">
        <source src="/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="bg-overlay"></div>

      {/* Stars */}
      <div className="stars">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: `${star.y}%`,
              left: `${star.x}%`,
              animationDuration: `${star.duration}s`
            }}
          ></div>
        ))}
      </div>

      {/* Mute/Unmute button */}
      <button
        className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-md"
        onClick={toggleSound}
        aria-label={soundMuted ? 'Unmute Sound' : 'Mute Sound'}
      >
        {soundMuted ? 'Unmute' : 'Mute'}
      </button>

      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto p-8 text-white z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold mb-6 animate-pop">Your Name</h1>
        <p className="text-lg text-gray-300 mb-8">Frontend Developer | UI/UX Enthusiast</p>
        <p className="text-gray-300 mb-6">
          Welcome to my portfolio website! I'm passionate about creating user-friendly interfaces and crafting engaging web experiences.
        </p>
        <div className="flex space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-green-600 text-white py-3 px-6 rounded-md text-lg transition duration-200"
            style={{ textDecoration: 'none' }}
          >
            View Projects
          </a>
          <Link
            to="/about"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-md text-lg transition duration-200"
            style={{ textDecoration: 'none' }}
          >
            About Me
          </Link>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 w-full flex justify-center">
        <a href="#more-content" className="text-white text-2xl animate-bounce">↓</a>
      </div>
    </div>
  );
};

export default HomePage;
