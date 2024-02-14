import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LeftColumn from './LeftColumn';
import RightContent from './RightContent';
import './App.css';

const App = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const currentPath = window.location.hash.slice(1) || '/profile';
    setActiveLink(currentPath);
  }, []);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Router>
      <div className="app-container">
        <LeftColumn activeLink={activeLink} onNavLinkClick={handleNavLinkClick} />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/profile" replace />}
          />
          <Route path="/profile" element={<RightContent activeLink="profile" />} />
          <Route path="/education" element={<RightContent activeLink="education" />} />
          <Route path="/projects" element={<RightContent activeLink="projects" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




