import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  useEffect(() => {
    const aboutText = document.getElementById('about-text');
    aboutText.classList.add('animate-enlarge');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-purple-400 flex flex-col items-center justify-center">
      <style>
        {`
          @keyframes enlarge {
            0% { transform: scale(1); }
            100% { transform: scale(1.2); }
          }
          .animate-enlarge {
            animation: enlarge 1.5s ease-in-out;
          }
          .content-container {
            display: flex;
            justify-content: center;
            max-width: 800px;
            margin-top: 20px;
          }
          .column {
            flex: 1;
            padding: 20px;
          }
          .column.left {
            border-right: 1px solid rgba(255, 255, 255, 0.3);
          }
          .column h3 {
            font-size: 1.5rem;
            font-weight: bold;
            color: #fff;
            margin-bottom: 10px;
          }
          .column ul {
            list-style: none;
            padding: 0;
          }
          .column li {
            margin-bottom: 10px;
            font-size: 1.1rem;
            line-height: 1.6;
            color: #fff;
          }
        `}
      </style>
      <div className="w-32 h-32 mb-6 border-4 border-white shadow-lg overflow-hidden rounded-full">
        <img 
          src="/profile.JPG" 
          alt="Profile" 
          className="w-full h-full object-cover transform scale-1.5 object-top"
        />
      </div>
      <h1 id="about-text" className="text-2xl font-bold text-white mb-6">
        About Me
      </h1>
      <div className="content-container">
        <div className="column left">
          <h3>Strengths</h3>
          <ul>
            <li>Effective Communication</li>
            <li>Adaptability</li>
            <li>Leadership</li>
            <li>Problem-solving</li>
            <li>Creativity</li>
          </ul>
        </div>
        <div className="column">
          <h3>Weaknesses</h3>
          <ul>
            <li>Challenges in Maintaining Deep Connections</li>
            <li>Impulsivity under stress</li>
            <li>When frustrated, I withdraw</li>
          </ul>
        </div>
      </div>
      <p className="text-lg text-white mb-6">Contact: 6238550576</p>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/bonny-david-b24788235/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-200">
          <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-200">
          <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
        </a>
        <a href="mailto:bonnydavid543@gmail.com" className="text-white hover:text-gray-300 transition duration-200">
          <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
