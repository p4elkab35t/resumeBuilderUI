import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router for navigation
import { Avatar } from '@mui/material';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-300 text-[#212121] flex justify-between items-center p-4">
      <div className="text-lg font-semibold">
        <Link to="/" className="text-[#212121] hover:text-gray-600">
          My Website
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link to="/dashboard" className="text-[#212121] hover:text-gray-600">
          Dashboard
        </Link>
        <Link to="/new" className="text-[#212121] hover:text-gray-600">
          New
        </Link>
      </nav>
      <div className="flex items-center space-x-2">
        <span className="text-[#212121]">John Doe</span>
        <Link to="/profile">
          <Avatar alt="John Doe" src="/profile-image.jpg" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
