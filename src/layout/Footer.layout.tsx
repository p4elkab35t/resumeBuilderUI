import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-[#212121] text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} ResumeBackBone. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
