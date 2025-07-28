import React from 'react';
import Header from './Header';
import MobileNav from './MobileNav';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-20 lg:pb-0">
        {children}
      </main>
      
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Layout;