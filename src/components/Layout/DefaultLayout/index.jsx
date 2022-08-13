import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </React.Fragment>
  );
}

export default DefaultLayout;
