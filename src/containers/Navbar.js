import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../router';

export const Navbar = () => {
  const [sidebar, useSidebar] = useState(false);
  return (
    <div>
      <button>Sidebar</button>
      {routes.map(route => (
        <Link key={route.state.id} to={route.pathname}>
          {route.state.title !== 'Author' ? route.state.title : null}
        </Link>
      ))}
    </div>
  );
};
