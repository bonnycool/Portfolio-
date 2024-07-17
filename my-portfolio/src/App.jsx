import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterPaths from './Components/Router';

const App = () => {
  return (
    <Router>
      <RouterPaths />
    </Router>
  );
};

export default App;
