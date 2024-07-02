"use client"
import React, { useState } from 'react';
import Navbar from './Navbar';
/*import Messages from '../components/Messages';

import Settings from '../components/Settings';*/
import Users from './Usuarios/page';

const Home = () => {
  const [page, setPage] = useState('messages');

  const renderPage = () => {
    switch (page) {
        case 'users':
        return <Users />;
      

    }
  };

  return (
    <>
      <Navbar setPage={setPage} />
      <div className="mt-4">
        {renderPage()}
      </div>
    </>
  );
};

export default Home;

