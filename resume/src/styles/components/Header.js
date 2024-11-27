import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-lg text-white text-center">
      <h1 className="text-5xl font-bold">Dr. Mohamed El Fadil</h1>
      <p className="text-xl mt-2">Neuroscience Researcher & Tech Developer</p>
      <p>Riyadh, Saudi Arabia</p>
      <div className="flex justify-center mt-4 space-x-6">
        <a href="mailto:your_email@example.com" aria-label="Email">
          <FaEnvelope className="text-3xl hover:text-gray-300" />
        </a>
        <a href="tel:your_phone_number" aria-label="Phone">
          <FaPhone className="text-3xl hover:text-gray-300" />
        </a>
        <a href="[your_linkedin_profile]" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-3xl hover:text-gray-300" />
        </a>
        <a href="[your_github_profile]" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-3xl hover:text-gray-300" />
        </a>
      </div>
    </header>
  );
};

export default Header;
