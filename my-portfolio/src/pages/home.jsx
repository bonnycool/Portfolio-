import React, { useState, useEffect } from 'react';
import Loading from '../Components/Loading';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './homepage.css';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [soundMuted, setSoundMuted] = useState(true);

  useEffect(() => {
    // Simulate loading effect (you can replace this with actual loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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

      {/* Mute/Unmute button */}
      <button
        className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-md"
        onClick={toggleSound}
        aria-label={soundMuted ? 'Unmute Sound' : 'Mute Sound'}
      >
        {soundMuted ? 'Unmute' : 'Mute'}
      </button>

      {/* Centered Content */}
      <div className="min-h-screen flex justify-center items-center z-10">
        <motion.div
          className="max-w-4xl mx-auto p-8 text-white"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="centered-content">
            <h1 className="hero-title animate-pop">Bonny David</h1>
            <p className="text-lg text-gray-300 mb-8">Frontend Developer | UI/UX Enthusiast</p>
            <p className="text-gray-300 mb-6">
              Welcome to my portfolio website! I'm a passionate Frontend Developer and UI/UX Enthusiast. With a keen eye for design and a love for creating intuitive user experiences, I thrive on building web applications that are not only functional but also visually appealing. My journey in web development has been fueled by my curiosity and drive to constantly learn and adapt to the ever-evolving landscape of technology. Alongside my frontend expertise, I have experience working with Firebase for backend services, and I am always eager to dive into backend development when the project demands it.
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
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 w-full flex justify-center">
        <a href="#more-content" className="text-white text-2xl animate-bounce">↓</a>
      </div>
    </div>
  );
};

export default HomePage;
