import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const LeftColumn = ({ activeLink, onNavLinkClick }) => {
  const navigate = useNavigate();

  const NavLink = ({ to, label, active, onClick }) => {
    return (
      <div
        className={`nav-link ${active ? 'active' : ''}`}
        onClick={() => {
          navigate(to);
          onClick();
        }}
      >
        <div className="line" />
        {label}
      </div>
    );
  };

  return (
    <div className="left-column">
      <div className="personal-info">
        <p className="name">Yunus Talay</p>
        <p className="title">Junior Frontend Developer</p>
        <p className="intro">I build pixel-perfect, engaging, and accessible digital experiences.</p>
      </div>
      <div className="nav-links">
        <NavLink to="/profile" label="Profile" active={activeLink === '/profile'} onClick={() => onNavLinkClick('/profile')} />
        <NavLink to="/education" label="Education" active={activeLink === '/education'} onClick={() => onNavLinkClick('/education')} />
        <NavLink to="/projects" label="Projects" active={activeLink === '/projects'} onClick={() => onNavLinkClick('/projects')} />
      </div>
      <div className="social-links">
        <a href="https://github.com/yuntal/">
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com/in/yunus-talay-324074191/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default LeftColumn;
