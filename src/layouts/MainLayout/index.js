import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Sidebar from '../Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
