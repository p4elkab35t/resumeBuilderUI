import React from 'react';
import Header from './Header.layout';
import Footer from './Footer.layout';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        {children} {/* This will render the content passed to the layout */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
