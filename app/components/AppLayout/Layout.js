import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => (
  <>
    <Header />
    <div id="main">
      {props.children}
    </div>
    <Footer />
  </>
);

export default Layout;