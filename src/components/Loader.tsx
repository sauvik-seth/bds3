import React from 'react';
import '../styles/Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      {/* Floating purple orbs */}
      <div className="purple-orb"></div>
      <div className="purple-orb"></div>
      <div className="purple-orb"></div>
      
      {/* Energy rings */}
      <div className="energy-ring"></div>
      <div className="energy-ring"></div>
      <div className="energy-ring"></div>
      
      {/* Geometric fragments */}
      <div className="fragment"></div>
      <div className="fragment"></div>
      <div className="fragment"></div>
      
      <div className="content">
        <div className="spiral-loader">
          <div className="spiral-wave"></div>
          <div className="spiral-wave"></div>
          <div className="spiral-wave"></div>
          <div className="spiral-wave"></div>
        </div>
      </div>
      
      {/* Logo in center */}
      <div className="logo-container">
        <img src="logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default Loader;
