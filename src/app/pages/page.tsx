"use client"
import React, { useState,ReactNode } from 'react';
import Navbar from './Navbar';
import withAuth1 from '@/App_aut';
/*import Messages from '../components/Messages';

import Settings from '../components/Settings';*/
import Users from './Usuarios/page';
import { useAuth } from '../Context/Auth-context';

const Home = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState('messages');
  

  const renderPage = () => {
    switch (page) {
        case 'users':
        return <Users />;
      

    }
  };

  return (
    <>
<p>hola pagina</p>
    </>
  );
};

/*

      <Navbar setPage={setPage} />
      <div className="mt-4">
        {renderPage()}
      </div>

*/

export default (Home);

