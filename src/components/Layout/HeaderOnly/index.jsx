import React from 'react';
import Header from './Header';

function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </React.Fragment>
  );
}

export default DefaultLayout;
