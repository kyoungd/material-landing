import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ location, children }) => {
  return (
    <>
      <Header location={location} />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
