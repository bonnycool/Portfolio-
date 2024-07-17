import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
const RouterPaths = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default RouterPaths;
